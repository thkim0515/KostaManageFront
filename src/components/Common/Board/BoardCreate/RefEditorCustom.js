import React, { useState, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Custom Toolbar Component
export const RefEditorCustom = () => (
    <div id="toolbar">
    <select className="ql-header" defaultValue="" onChange={(e) => e.persist()}>
      <option value="1"></option>
      <option value="2"></option>
      <option value=""></option>
    </select>
    <select className="ql-font">
      <option></option>
      <option value="serif"></option>
      <option value="monospace"></option>
    </select>
    <select className="ql-size">
      <option value="small"></option>
      <option></option>
      <option value="large"></option>
      <option value="huge"></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-blockquote"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-clean"></button>
    <input type="file" id="file-upload" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e)} />
    <button className="ql-fileUpload">📁</button>
  </div>
);

// File upload handler
const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    // 여기에 파일 업로드 로직을 추가하세요
    console.log('File uploaded:', file);
  }
};

// Register custom file upload button
const CustomFileUpload = () => {
  const handleClick = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <span className="ql-formats">
      <button className="ql-fileUpload" onClick={handleClick}>📁</button>
    </span>
  );
};

export default RefEditorCustom;