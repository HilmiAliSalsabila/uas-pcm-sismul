// src/App.js
import React, { useState } from 'react';
import UploadFile from './components/UploadFile';
import ReviewFile from './components/ReviewFile';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState({
    image: { original: null, compressed: null },
    audio: { original: null, compressed: null },
    video: { original: null, compressed: null },
  });

  const handleFileUpload = (data) => {
    const { originalUrl, compressedUrl, type } = data;
    const fileType = type.split('/')[0];

    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [fileType]: {
        original: { url: originalUrl, type: type },
        compressed: { url: compressedUrl, type: type },
      },
    }));
  };

  return (
    <div className="App">
      <h1>Upload and Review Files with PCM Compression</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <UploadFile type="image" onFileUpload={handleFileUpload} />
          <ReviewFile originalFile={uploadedFiles.image.original} compressedFile={uploadedFiles.image.compressed} />
        </div>
        <div>
          <UploadFile type="audio" onFileUpload={handleFileUpload} />
          <ReviewFile originalFile={uploadedFiles.audio.original} compressedFile={uploadedFiles.audio.compressed} />
        </div>
        <div>
          <UploadFile type="video" onFileUpload={handleFileUpload} />
          <ReviewFile originalFile={uploadedFiles.video.original} compressedFile={uploadedFiles.video.compressed} />
        </div>
      </div>
    </div>
  );
}

export default App;
