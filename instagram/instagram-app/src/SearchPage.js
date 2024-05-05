import React, { useState } from "react";
import "./SearchPage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchPage() {
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');

    const movePage = useNavigate();

    const searchHandle = (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.get('http://127.0.0.1:5001/users/' + nickname, config)
        .then(res => {
            if (res.data.id === undefined) {
                setMessage("검색 실패");
            } else {
                movePage("/profile", {state:{nickname: nickname}});
            }
        })
    }

    return (
        <div className="search_page">
            <form onSubmit={searchHandle}>
                <p className="word">검색</p>
                <input className="input_box" placeholder="검색" onChange={(e) => setNickname(e.target.value)}/>
                <button className="search_btn">검색</button>
            </form>
            <p className="result">{message}</p>
        </div>
    )
}

export default SearchPage;