import React from "react";
import "./CreateAccountPage.css";

function CreateAccountPage() {
    return (
        <div className="create_account_page">
            <div className="create_account_box">
                <img src={require('./image/instagram-wordmark-black.svg').default} alt="instagram_wordmarkicon" />
                <input className="input_box" type="text" placeholder="휴대폰 번호 또는 이메일 주소"/>
                <input className="input_box" type="text" placeholder="성명"/>
                <input className="input_box" type="text" placeholder="사용자 이름"/>
                <input className="input_box" type="password" placeholder="비밀번호"/>
                <button className="create_btn">가입</button>
                <div className="go_login">
                    <p>계정이 있으신가요?</p>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountPage;