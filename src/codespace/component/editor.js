import Editor from '@monaco-editor/react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClipboard, faFolder, faPaperPlane, faTrashAlt, faUpload} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import styles from './editor.module.css'

function CodeEditor({code,OnCodeChange}) {

    function menu_delete(){
        OnCodeChange('')
    }
    async function menu_copy(){
        try {
            await navigator.clipboard.writeText(code);
          } catch (err) {
          }
    }

    return (
      <div className={styles.codeEditorContainer}>
        <p style={{ color: '#A4B2CB' }}>파이썬 에디터</p>
        <div className={styles.editorMenu}>
          <button className={`${styles.menuButton} ${styles.menuDelete}`} onClick={menu_delete}>
            <FontAwesomeIcon icon={faTrashAlt} /> 삭제
          </button>
          <button className={`${styles.menuButton} ${styles.menuCopy}`} onClick={menu_copy}>
            <FontAwesomeIcon icon={faClipboard} /> 코드 복사
          </button>
          <OpenFileMenu OnCodeChange={OnCodeChange} />
          <button className={`${styles.menuButton} ${styles.menuSubmit}`}>
            <FontAwesomeIcon icon={faPaperPlane} /> 코드 제출
          </button>
        </div>
        <Editor height="100%" onChange={OnCodeChange} value={code} language="python" style={styles} />
      </div>
    )
}

function OpenFileMenu({OnCodeChange}){

    const handleFileChange = (e) => {
        const file = e.target.files[0];
      
        if (file && file.name.endsWith('.py')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            OnCodeChange(e.target.result);
          };
          reader.readAsText(file);
        } else {
          alert('파이썬 파일(.py)만 선택할 수 있습니다.');
        }
        e.target.value = null; // 입력 값을 초기화
      };
      
      const handleButtonClick = () => {
        document.getElementById('fileInput').click();
      };
      
      return (
        <div>
          <button
            className={`${styles.menuButton} ${styles.menuOpenfile}`}
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faUpload} /> 파일로 열기
          </button>
          <input
            id="fileInput"
            type="file"
            accept=".py"
            onChange={handleFileChange}
            style={{display:'none'}}
          />
      </div>
      );
      
}

export default CodeEditor;