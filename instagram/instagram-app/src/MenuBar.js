import React, { useState } from "react";
import "./MenuBar.css";
import hwei from './image/Hwei.webp';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Profile({src, iconName, title}) {
    const [nickname, setNickname] = useState('');

    const movePage = useNavigate();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("jwt"),
        },
      };
      
    axios.get('http://127.0.0.1:5001/users', config)
    .then(res => {
        if (res.data.result === "로그인 실패"){
            localStorage.removeItem("jwt");
            movePage("/");

        }
        setNickname(res.data.nickname);
    })
    .catch(error => {
        console.log(error);
    })

    return(
        <li>
            <Link to={"/profile"} state={{nickname: nickname}}>
                <img src={src} alt={iconName} width={26} height={26} style={{borderRadius: "50%"}}/>
                <p>{title}</p>
            </Link>
        </li>
    )
}

function Menu({src, iconName, title}) {
    return (
        <li>
            <Link to={"/search"} >
                <img src={src} alt={iconName} width={28} height={28} />
                <p>{title}</p>
            </Link>
        </li>
    )
}

function Make({src, iconName, title}) {
    return (
        <li>
            <Link to={"/posting"} >
                <img src={src} alt={iconName} width={28} height={28} />
                <p>{title}</p>
            </Link>
        </li>
    )
}

function Navigation() {
    return (
        <div className="navigation">
            <nav className="nav">
                <ul>
                    <Menu src={require('./image/home.svg').default} alt="homeicon" title={"홈"}/>
                    <Menu src={require('./image/search.svg').default} alt="searchicon" title={"검색"}/>
                    <Menu src={require('./image/compass.svg').default} alt="compasscion" title={"탐색 탭"}/>
                    <Menu src={require('./image/reels.svg').default} alt="reelsicon" title={"릴스"}/>
                    <Menu src={require('./image/message.svg').default} alt="messageicon" title={"메시지"}/>
                    <Menu src={require('./image/alarm.svg').default} alt="alarmicon" title={"알림"}/>
                    <Make src={require('./image/make.svg').default} alt="makeicon" title={"만들기"}/>
                    <Profile src={hwei} alt="usericon" title={"프로필"}/>
                </ul>
                <ul>
                    <Menu src={require('./image/at.svg').default} alt="aticon" title="Threads"/>
                    <Menu src={require('./image/more.svg').default} alt="moreicon" title="더 보기"/>
                </ul>
            </nav>
        </div>
    )
}

function HomeLogo() {
    return (
        <div className="home_logo">
            <div className="go_home">
                <div>
                    <Link to={"/main"}>
                        <img src={require('./image/instagram-wordmark.svg').default} alt="instagram_wordmarkicon" width={100} height={30}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function MenuBar() {
    return (
        <div className="menu_box">
            <HomeLogo />
            <Navigation />
        </div>
    )
}

export default MenuBar;