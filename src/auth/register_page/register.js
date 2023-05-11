import { useNavigate } from 'react-router-dom';
import styles from './register.module.css'

function RegisterPage(){
    const navigate = useNavigate();

    const GoLogin = () => {
        navigate('/login')
    }
    const GoHome = () =>{
        navigate('/')
    }
    return(
        <div className={styles.registerPage}>
            <div className={styles.registerContainer}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.logo} onClick={GoHome}>런스팀 OJ</h1>
                </div>
                <h2 className={styles.registerTitle}>회원가입</h2>
                <div className={styles.inputContainer}>
                    <input className={styles.registerInput} type="text" placeholder="이메일 주소" />
                    <input className={styles.registerInput} type="password" placeholder="비밀번호" />
                    <input className={styles.registerInput} type="password" placeholder="비밀번호 확인" />
                </div>
                <button className={styles.registerBtn}>회원가입</button>
                <div className={styles.buttonContainer}>
                    <div className={styles.backBtn} onClick={GoLogin}>로그인</div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;