import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import styled from 'styled-components';

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
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'list', 'bullet',
    'bold', 'italic', 'underline',
    'color', 'background', 'align',
    'link', 'image'
  ];

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
