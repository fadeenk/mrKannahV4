import React, { Component } from "react";
import ReactPlayer from "react-player";

class YouTube extends Component {
  render() {
    const { videoId } = this.props;
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "56.25%",
        }}
      >
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            border: 0,
            padding: "2px",
          }}
        />
      </div>
    );
  }
}

export default YouTube;
