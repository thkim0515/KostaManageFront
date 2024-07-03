import axios from 'axios';
import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';

const BoardDetail = () => {
    const [formData, setFornData] = useState({
        title: "",
        type: "",
        file: "",
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onChange = (e) => {
        const contentUpload = editorRef.current.getInstance();
        const content = contentUpload.getHTML();
        setFornData({...formData , content});
    }

    const handleUpload = async () => {
        try {
            const response = await axios.post(
                "#", formData
            );
            console.log(response.status);
            if (response.status === 200) {
                console.log("perfact upload", response.data);
                alert("업로드 완료");
            } else {
                alert("업로드 실패")
            }
        } catch (error) {
            console.log("upload fail" , error);
            alert("에러가 발생 했습니다")
        }
    };

    return (
        <S.Container>
            <input 
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='제목'
            />
            <input 
            type= 'type'
            name='type'
            value={formData.type}
            onChange={handleChange}
            placeholder='목록 선택'
            />
            <Editor
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock']
        ]}
        height="500px" // 에디터 창 높이
        initialEditType="markdown" // 기본 에디터 타입 (or wysiwyg)
        previewStyle="vertical" // 미리보기 스타일 (or tab) (verttical은 양쪽이 나뉨)
        
        ref={editorRef} // ref 참조
        onChange={onChange} // onChange 이벤트
      />
        </S.Container>
    );
};

export default BoardDetail;