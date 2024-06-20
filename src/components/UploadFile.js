// src/components/UploadFile.js
import React, { useState } from 'react';

function UploadFile({ type, onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Kirim file ke backend (misalnya menggunakan API)
    const res = await fetch('/api/upload?type=' + type, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      onFileUpload(data);
    } else {
      console.error('Failed to upload file');
    }
  };

  return (
    <div>
      <h2>Upload {type.toUpperCase()}</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept={`${type}/*`} onChange={handleFileChange} />
        <button type="submit">Upload {type.toUpperCase()}</button>
      </form>
    </div>
  );
}

export default UploadFile;
