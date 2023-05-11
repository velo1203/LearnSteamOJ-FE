import { useNavigate } from 'react-router-dom';
import './404.module.css'
function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="not-found-container">
            <div className="error-code">404</div>
            <div className="error-message">페이지를 찾을 수 없습니다.</div>
            <button className="go-back-button" onClick={() => navigate('/')}>
                뒤로 가기
            </button>
        </div>
    )
}

export default NotFound;