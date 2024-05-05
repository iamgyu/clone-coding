import React, { useState } from "react";
import "./Profile.css"
import hwei from './image/Hwei.webp';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileBoxUsers({nickname}) {
    const [name, setName] = useState('');
    const [postNumber, setPostNumber] = useState(0);
    const [followerNumber, setFollowerNumber] = useState(0);
    const [followingNumber, setFollowingNumber] = useState(0);

    const movePage = useNavigate(); 
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("jwt"),
        },
    };
      
    axios.get('http://127.0.0.1:5001/users/' + nickname, config)
    .then(res => {
        if (res.data.result === "로그인 실패"){
            localStorage.removeItem("jwt");
            movePage("/");
        }
        
        setName(res.data.name);
        setPostNumber(res.data.post_number);
        setFollowerNumber(res.data.follower_number);
        setFollowingNumber(res.data.following_number);
    })
    .catch(error => {
        console.log(error);
    })

    const logout = () => {
        localStorage.removeItem("jwt");
        movePage("/");
    }
    
    return (
        <div className="profile_box">
            <div className="user_img">
                <img src={hwei} alt="user_img" />
            </div>
            <div className="profile_info">
                <div className="nickname_and_btn">
                    <p>{nickname}</p>
                    <button>프로필 편집</button>
                    <button>보관된 스토리 보기</button>
                    <button onClick={logout}>로그아웃</button>
                </div>
                <div className="various_numbers">
                    <div>게시물 <p style={{fontWeight: "bold"}}>{postNumber}</p></div>
                    <div>팔로워 <p style={{fontWeight: "bold"}}>{followerNumber}</p></div>
                    <div>팔로잉 <p style={{fontWeight: "bold"}}>{followingNumber}</p></div>
                </div>
                <p className="user_name">{name}</p>
            </div>
        </div>
    )
}

function ProfileBoxOthers({nickname}) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [postNumber, setPostNumber] = useState(0);
    const [followerNumber, setFollowerNumber] = useState(0);
    const [followingNumber, setFollowingNumber] = useState(0);

    const movePage = useNavigate(); 
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("jwt"),
        },
      };
      
    axios.get('http://127.0.0.1:5001/users/' + nickname, config)
    .then(res => {
        if (res.data.result === "로그인 실패"){
            localStorage.removeItem("jwt");
            movePage("/");
        }

        setId(res.data.id);
        setName(res.data.name);
        setPostNumber(res.data.post_number);
        setFollowerNumber(res.data.follower_number);
        setFollowingNumber(res.data.following_number);
    })
    .catch(error => {
        console.log(error);
    })

    const handleFollow = () => {
        axios.post('http://127.0.0.1:5001/follows/' + id, {}, config)
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div className="profile_box">
            <div className="user_img">
                <img src={hwei} alt="user_img" />
            </div>
            <div className="profile_info">
                <div className="nickname_and_btn">
                    <p>{nickname}</p>
                    <button onClick={handleFollow}>팔로우</button>
                </div>
                <div className="various_numbers">
                    <div>게시물 <p style={{fontWeight: "bold"}}>{postNumber}</p></div>
                    <div>팔로워 <p style={{fontWeight: "bold"}}>{followerNumber}</p></div>
                    <div>팔로잉 <p style={{fontWeight: "bold"}}>{followingNumber}</p></div>
                </div>
                <p className="user_name">{name}</p>
            </div>
        </div>
    )
}

function ContentBox({nickname}) {
    const [loginNickname, setLoginNickname] = useState('');
    let isUser = false;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("jwt"),
        },
      };
    
    axios.get('http://127.0.0.1:5001/users', config)
    .then(res => {
        setLoginNickname(res.data.nickname);
    })
    .catch(error => {
        console.log(error);
    })
    
    if (loginNickname === nickname) {
        isUser = true;
    }

    return (
        <div className="content_box">
            {isUser ? <ProfileBoxUsers nickname={nickname}/> : <ProfileBoxOthers nickname={nickname} />}
        </div>
    )
}

function Profile() {
    const location = useLocation();
    const nickname = location.state.nickname;

    return (
        <div className="profile">
            <ContentBox nickname={nickname}/>
        </div>
    )
}

export default Profile;