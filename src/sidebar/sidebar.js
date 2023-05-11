import styles from './Sidebar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,faRightToBracket,faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';


function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const getClassName = (path) => {
      return location.pathname === path ? `${styles.sidebarLink} ${styles.sidebarOn}` : styles.sidebarLink;
    };
  
    

    const ic_login = <FontAwesomeIcon icon={faRightToBracket}/> 
    const ic_book = <FontAwesomeIcon icon={faBook}/> 
    const ic_profile = <FontAwesomeIcon icon={faUser}/> 

    const GoHome = () =>{
        navigate('/')
    }
    const GoLogin = () => {
        navigate('/login')
    }
    const GoMypage = () => {
        navigate('/mypage')
    }
    return (
        <div className={styles.sidebar}>
            <ul>
                <li className={getClassName('/login')} onClick={GoLogin}>
                    {ic_login} 로그인
                </li>
                <li className={getClassName('/')} onClick={GoHome}>
                    {ic_book} 문제 풀기
                </li>
                <li className={getClassName('/mypage')} onClick={GoMypage}>
                    {ic_profile} 내 정보
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;