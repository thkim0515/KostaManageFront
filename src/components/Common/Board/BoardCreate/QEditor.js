import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

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

// 아이콘을 추가하기 위한 CSS 스타일
const iconStyle = `
  .ql-attachment::before {
    content: '📁'; 
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
          ["attachment"], // 파일 업로드 버튼 추가
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
          attachment: attachmentHandler, // 파일 업로드 핸들러
        },
      },
    }),
    [localAddress]
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
    "attachment", // 파일 업로드 형식 추가
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
          quill.insertEmbed(range.index, "image", url);
        } catch (error) {
          console.error("Error uploading image: ", error);
        }
      }
    };
  }

  async function attachmentHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
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
          const link = `<a href="${url}" target="_blank" style="text-decoration: underline;">📁 ${file.name}</a>`;
          quill.clipboard.dangerouslyPasteHTML(range.index, link);
        } catch (error) {
          console.error("Error uploading attachment: ", error);
        }
      }
    };
  }

  return (
    <EditorWrapper>
      <style>{iconStyle}</style> {/* 아이콘 스타일을 추가 */}
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
