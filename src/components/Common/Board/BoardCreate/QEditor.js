import React, { useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

// Styled component for the editor wrapper
const EditorWrapper = styled.div`
  width: 100%; // 에디터의 너비를 100%로 설정
  .ql-toolbar.ql-snow {
    display: flex;
    flex-wrap: wrap; // 툴바가 여러 줄로 나뉠 수 있도록 함
    justify-content: center; // 중앙 정렬
  }
  .ql-container.ql-snow {
    width: 100%; // 에디터의 너비를 100%로 설정
  }
`;

const QEditor = ({ value, onChange }) => {
  const localAddress = useSelector((state) => state.localAddress.value);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "color",
    "background",
    "align",
    "link",
    "image",
  ];

  async function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        try {
          const response = await axios.post(
            `${localAddress}api/posts/upload`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          const url = response.data.url;
          const quill = this.quill;
          const range = quill.getSelection();
          console.log(url);
          quill.insertEmbed(range.index, "image", url);
        } catch (error) {
          console.error("Error uploading image: ", error);
        }
      }
    };
  }

  return (
    <EditorWrapper>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </EditorWrapper>
  );
};

export default QEditor;
