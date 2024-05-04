import React, { Component } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

class Gallery extends Component {
  state = {
    images: [],
    index: -1,
  };

  componentDidMount() {
    const { photos } = this.props;

    Promise.all(photos.map((obj) => {
      const src = typeof obj === "string" ? obj : obj.src;
      if (obj.width && obj.height) {
        return obj;
      }
      let img = new Image();
      img.src = src;
      return new Promise(resolve => {
        img.onload = () => {
        const res = {
            src: img.src,
            height: img.height,
            width: img.width
        };
        typeof obj === "string" ? resolve(res): resolve({...obj, ...res});
        }
      })
    })).then((images) => this.setState({images}));
  };

  render(){
    const {images, index } = this.state;
    return (
      <>
        <PhotoAlbum photos={images} layout="rows" targetRowHeight={250} 
        onClick={({ index }) => this.setState({index})} padding={5} spacing={5} />
  
        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => this.setState({index: -1})}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </>
    );
  }
}

export default Gallery;