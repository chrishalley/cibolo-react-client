import React, { useState, useEffect, useRef } from 'react';

import './Dropzone.css';

const Dropzone = (props) => {
  const { defaultValue } = props;

  const [file, setFile] = useState( defaultValue || '' );
  const [highlight, setHighlight] = useState(false);

  const fileInputRef = useRef(null);

  const openFileDialog = () => {
    if (props.disabled) return;
    fileInputRef.current.click();
  };

  const onFilesAdded = (e) => {
    if (props.diabled) return;
    const files = e.target.files;
    if (props.onFilesAdded) {
      const array = fileListToArray(files);
      props.onFilesAdded(array);
    }
  }

  const fileListToArray = function(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  const onDragOver = (e) => {
    e.preventDefault();
    if (props.disabled) return;
    setHighlight(true);
  };

  const onDragLeave = () => {
    setHighlight(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    if (props.disabled) return;

    const files = e.dataTransfer.files;
    if (props.onFilesAdded) {
      const array = fileListToArray(files);
      props.onFilesAdded(array);
    }
    setHighlight(false)
  };



  return (
    <div
      className={`Dropzone ${highlight ? "Highlight" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={openFileDialog}
      style={{ cursor: props.disabled ? "default" : "pointer" }}
    >
      {/* <img
        src={`${process.env.PUBLIC_URL}/outline-cloud_upload-24px.svg`}
        className="Icon"
        alt="upload"
      /> */}
      <input
        type="file"
        ref={fileInputRef}
        className="FileInput"
        multiple
        onChange={onFilesAdded}
      />
      <span>Drag file here</span>
    </div>
  );
};

export { Dropzone };

// class Dropzone extends Component {
//   constructor(props) {
//     super(props);
//     this.fileInputRef = React.createRef();

//     this.state = {highlight: false};

//     this.openFileDialog = this.openFileDialog.bind(this);
//     this.onFilesAdded = this.onFilesAdded.bind(this);
//     this.onDragOver = this.onDragOver.bind(this);
//     this.onDragLeave = this.onDragLeave.bind(this);
//     this.onDrop = this.onDrop.bind(this);
//   }

//   openFileDialog() {
//     if (this.props.disabled) return;
//     this.fileInputRef.current.click();
//   }

//   onFilesAdded(e) {
//     if (this.props.diabled) return;
//     const files = e.target.files;
//     if (this.props.onFilesAdded) {
//       const array = this.fileListToArray(files);
//       this.props.onFilesAdded(array);
//     }
//   }

//   fileListToArray(list) {
//     const array = [];
//     for (var i = 0; i < list.length; i++) {
//       array.push(list.item(i));
//     }
//     return array;
//   }

//   onDragOver(e) {
//     e.preventDefault();
//     if (this.props.disabled) return;
//     this.setState({ highlight: true });
//   }

//   onDragLeave() {
//     this.setState({ highlight: false });
//   }

//   onDrop(e) {
//     e.preventDefault();
//     if (this.props.disabled) return;

//     const files = e.dataTransfer.files;
//     if (this.props.onFilesAdded) {
//       const array = this.fileListToArray(files);
//       this.props.onFilesAdded(array);
//     }
//     this.setState({ highlight: false });
//   }

//   render() {
//     return (
//       <div 
//         className={`Dropzone ${this.state.highlight ? "Highlight" : ""}`}
//         onDragOver={this.onDragOver}
//         onDragLeave={this.onDragLeave}
//         onDrop={this.onDrop}
//         onClick={this.openFileDialog}
//         style={{ cursor: this.props.disabled ? "default" : "pointer" }}
//       >
//         <img 
//           src={`${process.env.PUBLIC_URL}/outline-cloud_upload-24px.svg`}
//           className="Icon"
//           alt="upload"
//         />
//         <input 
//           type="file"
//           ref={this.fileInputRef}
//           className="FileInput"
//           multiple
//           onChange={this.onFilesAdded}
//         />
//         <span>Upload Files</span>
//       </div>
//     );
//   }
// }

// export { Dropzone };