import LoginPage from "./LoginPage";
import CreateAccountPage from "./CreateAccountPage";
import Posting from "./Posting";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";
import PostPage from "./PostPage";

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
        {/* 프로필 페이지 */}
        <Route path="/profile" element={<ProfilePage />} />
        {/* 검색 페이지 */}
        <Route path="/search" element={<SearchPage />} />
        {/* 게시물 생성 페이지 */}
        <Route path="/posting" element={<Posting />} />
        {/* 게시물 페이지 */}
        <Route path="/postpage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
