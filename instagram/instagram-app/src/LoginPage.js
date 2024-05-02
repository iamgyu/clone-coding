import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const movePage = useNavigate();

    function goCreateAccount() {
        movePage("/createAccount");
    }

    const loginHandle = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:5001/users/login', {
            phone_nick_email: id,
            password: password
        })
        .then(res => {
            console.log(res.data);
            setMessage(res.data.result);

            if (res.data.result === "로그인 성공") {
                localStorage.setItem("key", res.data.jwt);
                movePage("/main");
            }
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="login_page">
            <div className="login_box">
                <form onSubmit={loginHandle}>
                    <img src={require('./image/instagram-wordmark-black.svg').default} alt="instagram_wordmarkicon" />
                    <input className="input_box" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={(e) => setId(e.target.value)} />
                    <input className="input_box" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="login_btn" type="submit">로그인</button>
                </form>
                <p className="login_message">{message}</p>
                <div className="go_create_account">
                    <p>계정이 없으신가요?</p>
                    <button onClick={goCreateAccount}>가입하기</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;