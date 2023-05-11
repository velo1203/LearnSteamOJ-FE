import styles from'./Nav.module.css'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

function NavigationBar(){

    const code = <FontAwesomeIcon icon={faCode}/>
    const navigate = useNavigate();

    const GoLogin = () => {
        navigate('/login')
    }

    const GoRegister = () => {
        navigate('/register')
    }
    const GoHome = () => {
        navigate('/')
    }
    const GoMypage = () => {
        navigate('/mypage')
    }

    return (
        <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo} onClick={GoHome}>
            런스팀 {code}
          </div>
          <ul className={styles.navList}>
            <li onClick={GoLogin}>로그인</li>
            <li onClick={GoRegister}>회원가입</li>
            <li onClick={GoMypage}>내 정보</li>
          </ul>
        </div>
      </nav>
    )
}

export default NavigationBar;