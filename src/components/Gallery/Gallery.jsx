import React, { useState, useEffect, useRef } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import ReactPlayer from "react-player";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = ({ photos }) => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);
  const [videoStates, setVideoStates] = useState({}); // Track playing state for each video by index
  const playerRefs = useRef({}); // Store refs for each video player

  // Helper function to check if file is a video
  const isVideo = (src) => {
    return /\.(mp4|webm|ogg|avi|mov|wmv|flv|mkv)$/i.test(src);
  };

  // Helper function to generate video thumbnail with play button overlay
  const generateVideoThumbnail = (videoSrc) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.crossOrigin = "anonymous";
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        // Seek to 1 second or 10% of duration, whichever is smaller
        const seekTime = Math.min(1, video.duration * 0.1);
        video.currentTime = seekTime;
      };

      video.onseeked = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw the video frame
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Add play button overlay
        drawPlayButton(ctx, canvas.width, canvas.height);

        const thumbnailSrc = canvas.toDataURL("image/jpeg", 0.8);
        resolve({
          src: videoSrc,
          thumbnail: thumbnailSrc,
          width: video.videoWidth,
          height: video.videoHeight,
          isVideo: true,
        });
      };

      video.onerror = () => {
        // Fallback: create a placeholder thumbnail with play button
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 400;
        canvas.height = 300;

        // Draw background
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add play button
        drawPlayButton(ctx, canvas.width, canvas.height);

        resolve({
          src: videoSrc,
          thumbnail: canvas.toDataURL("image/jpeg"),
          width: 400,
          height: 300,
          isVideo: true,
        });
      };

      video.src = videoSrc;
    });
  };

  // Helper function to draw play button on canvas
  const drawPlayButton = (ctx, width, height) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const buttonSize = Math.min(width, height) * 0.15; // 15% of the smaller dimension

    // Draw semi-transparent background circle
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.beginPath();
    ctx.arc(centerX, centerY, buttonSize, 0, 2 * Math.PI);
    ctx.fill();

    // Draw white border
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw play triangle
    ctx.fillStyle = "white";
    ctx.beginPath();
    const triangleSize = buttonSize * 0.6;
    const triangleX = centerX - triangleSize * 0.3;
    const triangleY = centerY - triangleSize * 0.5;

    ctx.moveTo(triangleX, triangleY);
    ctx.lineTo(triangleX, triangleY + triangleSize);
    ctx.lineTo(triangleX + triangleSize * 0.8, centerY);
    ctx.closePath();
    ctx.fill();
  };

  // Helper function to load image dimensions
  const loadImageDimensions = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve({
          src: img.src,
          width: img.width,
          height: img.height,
          isVideo: false,
        });
      };
      img.onerror = () => {
        resolve({
          src: src,
          width: 400,
          height: 300,
          isVideo: false,
        });
      };
    });
  };

  useEffect(() => {
    Promise.all(
      photos.map((obj) => {
        const src = typeof obj === "string" ? obj : obj.src;

        // If dimensions are already provided, use them
        if (obj.width && obj.height) {
          return {
            ...obj,
            isVideo: isVideo(src),
          };
        }

        // Check if it's a video
        if (isVideo(src)) {
          return generateVideoThumbnail(src);
        } else {
          // It's an image
          return loadImageDimensions(src);
        }
      })
    ).then((images) => setImages(images));
  }, [photos]);

  // Custom slide component for videos
  const renderVideoSlide = ({ slide, rect }) => {
    if (!slide.isVideo) return null;

    // Find the index of this slide in the images array
    const slideIndex = images.findIndex(
      (img) => img.src === slide.videoSrc || img.thumbnail === slide.src
    );

    if (slideIndex === -1) return null;

    // Create or get ref for this video
    if (!playerRefs.current[slideIndex]) {
      playerRefs.current[slideIndex] = React.createRef();
    }

    // Use the video source directly - Docusaurus handles the path resolution
    const videoUrl = slide.videoSrc;

    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          zIndex: 1,
        }}
      >
        <ReactPlayer
          ref={playerRefs.current[slideIndex]}
          src={videoUrl}
          controls
          playing={videoStates[slideIndex] || false}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onError={(e) => console.error("Video error:", e)}
          config={{
            file: {
              attributes: {
                crossOrigin: "anonymous",
                preload: "metadata",
              },
            },
          }}
        />
      </div>
    );
  };

  // Handle slide change
  const handleSlideChange = (newIndex) => {
    // Stop all currently playing videos
    stopAllVideos();

    // Create new video states object
    const newVideoStates = {};

    // If the new slide is a video, set it to play
    if (images[newIndex] && images[newIndex].isVideo) {
      newVideoStates[newIndex] = true;
    }

    setIndex(newIndex);
    setVideoStates(newVideoStates);
  };

  // Helper method to stop all videos
  const stopAllVideos = () => {
    Object.keys(playerRefs.current).forEach((index) => {
      const playerRef = playerRefs.current[index];
      if (playerRef && playerRef.current) {
        try {
          const internalPlayer = playerRef.current.getInternalPlayer();
          if (internalPlayer && typeof internalPlayer.pause === "function") {
            internalPlayer.pause();
          }
        } catch (error) {}
      }
    });
  };

  // Handle lightbox close with video cleanup
  const handleLightboxClose = () => {
    // Stop all playing videos before closing
    stopAllVideos();
    setIndex(-1);
    setVideoStates({});
  };

  // Prepare slides for lightbox
  const slides = images.map((img) => ({
    src: img.thumbnail || img.src,
    alt: img.alt || "",
    isVideo: img.isVideo,
    videoSrc: img.isVideo ? img.src : undefined,
  }));

  return (
    <>
      <RowsPhotoAlbum
        photos={images.map((img) => ({
          src: img.thumbnail || img.src,
          width: img.width,
          height: img.height,
          alt: img.alt || "",
        }))}
        targetRowHeight={250}
        onClick={({ index }) => setIndex(index)}
        padding={2}
        spacing={2}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={handleLightboxClose}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        render={{
          slide: renderVideoSlide,
        }}
        on={{
          view: ({ index: newIndex }) => handleSlideChange(newIndex),
        }}
      />
    </>
  );
};

export default Gallery;
