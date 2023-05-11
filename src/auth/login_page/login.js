import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'

function LoginPage() {
    const navigate = useNavigate()
    const GoRegister = () => {
        navigate('/register')
    }
    const GoHome = () =>{
        navigate('/')
    }
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.logo} onClick={GoHome}>런스팀 OJ</h1>
                </div>
                <h2 className={styles.loginTitle}>로그인</h2>
                <div className={styles.inputContainer}>
                    <input className={styles.loginInput} type="text" placeholder="이메일 주소"/>
                    <input className={styles.loginInput} type="password" placeholder="비밀번호"/>
                </div>
                <button className={styles.loginBtn}>로그인</button>
                <div className={styles.separator}>
                    <span className={styles.separatorText}>또는</span>
                </div>
                <button className={styles.googleLoginBtn}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google logo"/>
                    구글로 로그인
                </button>
                <div className={styles.buttonContainer}>
                    <div className={styles.backBtn} onClick={GoRegister}>회원가입</div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;