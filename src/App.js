import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ProblemPage from './problem_page/Problem';
import LoginPage from './auth/login_page/login';
import RegisterPage from './auth/register_page/register';
import CodeSpace from './codespace/codespace';
import Mypage from './mypage/mypage';
import NotFound from './404/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <ProblemPage />
              </Layout>
            }
          ></Route>
          <Route
            path="/mypage"
            element={
              <Layout>
                <Mypage/>
              </Layout>
            }
          />
          <Route
            path="/codespace"
            element={
              <Layout>
                <CodeSpace />
              </Layout>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;