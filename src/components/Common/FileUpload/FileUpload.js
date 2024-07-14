import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const FileUploadComponent = () => {
  const [boardId, setBoardId] = useState("");
  const [files, setFiles] = useState([]);
  const localAddress = useSelector((state) => state.localAddress.value);
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("board_id", boardId);

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await axios.post(`${localAddress}api/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {}
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Board ID:</label>
          <input
            type="number"
            value={boardId}
            onChange={(e) => setBoardId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Files:</label>
          <input type="file" multiple onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUploadComponent;
