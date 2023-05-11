import {useState, useEffect } from 'react';
import styles from './css/searchbox.module.css'

function Searchbox(props) {
    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    const handleCategoryClick = (category) => {
        if (selectedCategory && selectedCategory.id === category.id) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showCategories && e.target.closest(`.${styles.categoryContainer}`) === null) {
                setShowCategories(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCategories]);

    const categoryItems = [
        {
            id: 1,
            name: '어려움',
            color: '#FFABAB'
        }, {
            id: 2,
            name: '보통',
            color: '#FDFFAB'
        }, {
            id: 3,
            name: '쉬움',
            color: '#CBFFAB'
        }
    ];

    return (
        <div className={styles.headerSearchbox}>
            <h1>{props.ic_book} 파이썬 기본 문제</h1>
            <div className={styles.headerSearch}>
                <div className={styles.searchForm}>
                    <input type="text" className={styles.searchInput} placeholder="문제 이름또는 아이디 검색"/>
                    <button className={styles.searchIcon}>{props.ic_search}</button>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.searchCategory} onClick={toggleCategories}>
                        카테고리 {props.ic_plus}
                    </div>
                    <div
                        className={styles.categoryInfo}
                        style={{
                            display: selectedCategory ? 'inline-flex' : 'none'
                        }}
                    >
                        <div
                            className={styles.categoryColor}
                            style={{
                                backgroundColor: selectedCategory ? selectedCategory.color : 'inherit',
                            }}
                        ></div>
                        <span className={styles.categoryName}>
                            {selectedCategory ? selectedCategory.name : null}
                        </span>
                    </div>
                    {showCategories && (
                        <CategoryBox
                            categoryItems={categoryItems}
                            handleCategoryClick={handleCategoryClick}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

function CategoryBox({ categoryItems, handleCategoryClick }) {
    return (
        <div className={styles.categoryBox}>
            <ul className={styles.categoryList}>
                {categoryItems.map((item) => (
                    <li
                        key={item.id}
                        className={styles.categoryItem}
                        style={{
                            color: item.color
                        }}
                        onClick={() => handleCategoryClick(item)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Searchbox;