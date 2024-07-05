
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import RefEditorCustom from './RefEditorCustom';


export const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <RefEditorCustom />
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={{
          toolbar: {
            container: "#toolbar",
            handlers: {
              fileUpload: () => {
                document.getElementById('file-upload').click();
              }
            }
          }
        }}
        formats={[
          'header', 'font', 'size',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent',
          'link', 'image', 'fileUpload'
        ]}
      />
    </div>
  );
}

export default MyEditor;
