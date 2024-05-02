 import LoginPage from "./LoginPage";
 import CreateAccountPage from "./CreateAccountPage";
//import Posting from "./Posting";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지*/}
        <Route path="/" element={<LoginPage />} />
        {/* 회원가입 페이지 */}
        <Route path="/createAccount" element={<CreateAccountPage />} />
        {/* 메인 페이지 */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
