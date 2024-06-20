// src/components/ReviewFile.js
import React from 'react';

function ReviewFile({ originalFile, compressedFile }) {
  return (
    <div>
      <h2>Review Files</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Original File</h3>
          {originalFile && (
            <>
              {originalFile.type.startsWith('image/') && <img src={originalFile.url} alt="Original" />}
              {originalFile.type.startsWith('audio/') && <audio controls src={originalFile.url}></audio>}
              {originalFile.type.startsWith('video/') && <video controls src={originalFile.url}></video>}
            </>
          )}
        </div>
        <div>
          <h3>Compressed File</h3>
          {compressedFile && (
            <>
              {compressedFile.type.startsWith('image/') && <img src={compressedFile.url} alt="Compressed" />}
              {compressedFile.type.startsWith('audio/') && <audio controls src={compressedFile.url}></audio>}
              {compressedFile.type.startsWith('video/') && <video controls src={compressedFile.url}></video>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewFile;
