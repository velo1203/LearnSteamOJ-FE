import styles from './mypage.module.css'

function Mypage(){
    const userInfo = {
        name: '홍길동',
        email: 'hong@example.com',
        solvedProblemsCount: 5,
      };
    
      const solvedProblems = [
        { id: 1, title: '문제 1', date: '2023-05-01' },
        { id: 2, title: '문제 2', date: '2023-05-02' },
        // ...
      ];
    
      return (
        <div className={styles.myPage}>
        <h1>sample page, not designed</h1>
        <div className={styles.userInfo}>
          <h2>사용자 정보</h2>
          <p>이름: {userInfo.name}</p>
          <p>이메일: {userInfo.email}</p>
          <p>푼 문제의 수: {userInfo.solvedProblemsCount}</p>
        </div>
        <div className={styles.solvedProblems}>
          <h2>푼 문제 목록</h2>
          <ul>
            {solvedProblems.map((problem) => (
              <li key={problem.id}>
                {problem.title} - {problem.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
      );
}

export default Mypage;