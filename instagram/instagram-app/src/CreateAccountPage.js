import React, { useState } from "react";
import "./CreateAccountPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateAccountPage() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const movePage = useNavigate();

    function goLogin() {
        movePage("/");
    }

    const signupHandle = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:5001/users/join', {
            phone_email: id,
            name: name,
            nickname: nickname, 
            password: password
        })
        .then(res => {
            console.log(res.data)
            setMessage(res.data.result);
            
            if (res.data.result === "회원가입 성공") {
                movePage("/");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="create_account_page">
            <div className="create_account_box">
                <form onSubmit={signupHandle}>
                    <img src={require('./image/instagram-wordmark-black.svg').default} alt="instagram_wordmarkicon" />
                    <input className="input_box" type="text" placeholder="휴대폰 번호 또는 이메일 주소" onChange={(e) => setId(e.target.value)} />
                    <input className="input_box" type="text" placeholder="성명" onChange={(e) => setName(e.target.value)} />
                    <input className="input_box" type="text" placeholder="사용자 이름" onChange={(e) => setNickname(e.target.value)} />
                    <input className="input_box" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
                    <button className="create_btn">가입</button>
                </form>
                <p className="singup_message">{message}</p>
                <div className="go_login">
                    <p>계정이 있으신가요?</p>
                    <button onClick={goLogin}>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountPage;