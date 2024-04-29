import React from "react";
import "./LoginPage.css";

function LoginPage() {
    //const [id, setId] = useState('');
    // const [password, setPassword] = useState('');

    return (
        <div className="login_page">
            <div className="login_box">
                <img src={require('./image/instagram-wordmark-black.svg').default} alt="instagram_wordmarkicon" />
                <input className="input_box" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                <input className="input_box" type="password" placeholder="비밀번호" />
                <button className="login_btn">로그인</button>
                <div className="go_create_account">
                    <p>계정이 없으신가요?</p>
                    <button>가입하기</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;