import { useNavigate } from 'react-router-dom';
import styles from './css/problemlist.module.css'

function Problemlist(props) {
    const navigate = useNavigate();

    const GoCodespace = () => {
        navigate('/codespace');
    };

    const data = [
        {
            title: "Hello World!",
            description: "Hello World를 출력해봅시다",
            date: "2023-05-01",
            category_name: '보통',
            color: '#FDFFAB'
        },
        {
            title: "Input 받기",
            description: "Input()을 써봅시다",
            date: "2023-05-02",
            category_name: '어려움',
            color: '#FFABAB'
        },
        {
            title: "Hello World!",
            description: "Hello World를 출력해봅시다",
            date: "2023-05-01",
            category_name: '쉬움',
            color: '#CBFFAB'
        },
        // 추가 데이터...
    ];

    return (
        <table className={styles.table}>
            <colgroup>
                <col style={{ width: '25%' }} />
                <col style={{ width: '55%' }} />
                <col style={{ width: '20%' }} />
            </colgroup>
            <thead className={styles.tableHead}>
                <tr>
                    <th>문제 이름/아이디</th>
                    <th>문제 설명</th>
                    <th>날짜</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {data.map((row, index) => (
                    <TableRow key={index} rowData={row} icons={props} GoCodespace={GoCodespace} />
                ))}
            </tbody>
        </table>
    );
}

function TableRow({ rowData, icons, GoCodespace }) {
    return (
        <tr>
            <td className={styles.tableTitle} onClick={GoCodespace}>
                {icons.ic_book} {rowData.title}
            </td>
            <td className={styles.tableDescription}>
                {rowData.description} <TableCategory category_name={rowData.category_name} color={rowData.color} />
            </td>
            <td className={styles.tableDate}>{rowData.date}</td>
            <td className={styles.favorite}>{icons.ic_star}</td>
        </tr>
    );
}

function TableCategory(props) {
    return (
        <div className={styles.categoryInfo}>
            <div
                className={styles.categoryColor}
                style={{
                    backgroundColor: props.color,
                }}
            ></div>
            <span className={styles.categoryName}>{props.category_name}</span>
        </div>
    );
}

export default Problemlist;