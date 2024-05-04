import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "./pdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      numPages: null,
      fileObject: { url: props.url },
    };
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }

  handleResize = (e) => {
    const width = e ? e.target.innerWidth : window.innerWidth;
    if (width < 600) {
      this.setState({ width: window.screen.width * 0.9 });
    } else {
      this.setState({
        width: document.getElementsByClassName("pdfContainer")[0].clientWidth,
      });
    }
  };

  render() {
    const { numPages } = this.state;
    return (
      <div className="pdfContainer">
        <Document
          file={this.state.fileObject}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={this.state.width}
            />
          ))}
        </Document>
      </div>
    );
  }
}

export default PDFViewer;
