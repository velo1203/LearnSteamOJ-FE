import styles from './codespace.module.css';
import {useState} from 'react';
import CodeEditor from './component/editor';

function CodeSpace() {
    const [exampleData, setExampleData] = useState([
        {
            "input": "3\n1 3 5",
            "output": "9"
        }, {
            "input": "5\n2 4 6 8 10",
            "output": "30"
        }, {
            "input": "4\n1 2 3 4",
            "output": "10"
        }
    ]);

    const [code, setCode] = useState('');

    const OnCodeChange = (value)=> {
        setCode(value)
    }

    return (
        <div className={styles.csContainer}>
        <div className={styles.csTitle}>수 더하기</div>
        <div className={styles.csDescription}>주어진 수를 모두 더하고 출력하세요</div>
        <p className={styles.csId}>ID: 3</p>
        <div className={styles.csExampleIO}>
          {exampleData.map((example, index) => (
            <div key={index} className={styles.csExamplePair}>
              <div className={styles.cxExampleBox}>
                <div className={styles.csExampleLabel}>예시입력 {index + 1}</div>
                <div className={styles.csExampleInput}>{example.input}</div>
              </div>
              <div className={styles.cxExampleBox}>
                <div className={styles.csExampleLabel}>예시 출력 {index + 1}</div>
                <div className={styles.csExampleOutput}>{example.output}</div>
              </div>
            </div>
          ))}
        </div>
        <CodeEditor code={code} OnCodeChange={OnCodeChange} styles={styles} />
      </div>
    );
}

export default CodeSpace;