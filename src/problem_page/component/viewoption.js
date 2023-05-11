import styles from './css/viewoption.module.css'
import { useState } from 'react';

function Viewoption() {

    const [selectedOption, setSelectedOption] = useState('최신 문제');

    const options = [
      {
        id: 1,
        label: '최신 문제',
      },
      {
        id: 2,
        label: '내 문제',
      },
      {
        id: 3,
        label: '풀어본 문제',
      },
      
    ];
  
    const handleOptionClick = (optionLabel) => {
      setSelectedOption(optionLabel);
    };
  
    return (
      <ul className={styles.viewoptions}>
        {options.map((option) => (
          <li
            key={option.id}
            className={`${styles.viewoption} ${selectedOption === option.label ? styles['view-on'] : ''}`}
            onClick={() => handleOptionClick(option.label)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    );
}

export default Viewoption;