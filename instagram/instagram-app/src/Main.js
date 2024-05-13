import React, { useEffect, useState } from "react";
import "./Main.css"
import hwei from './image/Hwei.webp';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function OneStory() {
    return (
        <div className="one_story">
            <div className="story_img">
                <img src={hwei} alt="user_img" />
            </div>
            <p>donggyu</p>
        </div>
    )
}

function StoryCollection() {
    return (
        <div className="story_collection">
            <OneStory />
            <OneStory />
            <OneStory />
            <OneStory />
            <OneStory />
            <OneStory />
            <OneStory />
            <OneStory />
            <OneStory />
            <OneStory />
        </div>
    )
}

function Feed({nickname, data}) {
    const [commentData, setCommentData] = useState([]); // 댓글 데이터
    const [content, setContent] = useState(''); // 다는 댓글용

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.get('http://127.0.0.1:5001/comments/post/' + data.id, config)
        .then(res => {
            setCommentData(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [data.id])
    
    const likePost = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.post('http://127.0.0.1:5001/likes', {
            post_id: data.id
        }, config)
        .then(res => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        });
    }

    const deleteLike = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
            data: {
                post_id: data.id
            }
        };

        axios.delete('http://127.0.0.1:5001/likes', config)
        .then(res => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }

    const commentPost = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.post('http://127.0.0.1:5001/comments', {
            content: content,
            post_id: data.id
        }, config)
        .then(res => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="feed">
            <div className="head">
                <div className="user_info">
                    <img src={hwei} alt="user_img" />
                    <p className="name">{nickname}</p>
                    <p className="time">•<a href="#!">1일</a></p>
                </div>
                <button className="more_option">•••</button>
            </div>
            <div className="main_img">
                <img src={data.image} alt="img" />
            </div>
            <div className="bottom">
                <div className="button_collection">
                    <div className="left_button">
                        <img src={require('./image/alarm.svg').default} alt="heart" onClick={likePost}/>
                        <img src={require('./image/search.svg').default} alt="comment" onClick={deleteLike}/>
                        <img src={require('./image/message.svg').default} alt="send"/>
                    </div>
                    <img src={require('./image/more.svg').default} alt="store" />
                </div>
                <div className="text_collection">
                    <div className="like">좋아요 {data.like_number}개</div>
                    <div className="main_text">
                        <p className="name">{nickname}</p>
                        <p className="text">{data.content}</p>
                        <button className="show_more_btn">더 보기</button>
                    </div>
                    <div className="all_comments">
                        {
                            commentData?.map(comment =>
                                <div className="one_comment" key={comment.id}>
                                    <div className="comment_info">
                                        <p>{comment.nickname}</p>
                                        <p>{comment.content}</p>
                                    </div>
                                </div>
                        )}
                    </div>
                    <div className="input_box">
                        <input className="input_comment" type="text" placeholder="댓글 달기..." onChange={(e) => setContent(e.target.value)} />
                        <button onClick={commentPost}>게시</button>
                    </div>      
                </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}

function FeedCollection({name, nickname}) {
    const [datas, setDatas] = useState([]); // 게시물 데이터
    const [id, setId] = useState(''); // 해당 프로필 유저 id

    const movePage = useNavigate();
    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };
        
        if (nickname !== ''){
            axios.get('http://127.0.0.1:5001/users/' + nickname, config)
            .then(res => {
                if (res.data.result === "로그인 실패"){
                    localStorage.removeItem("jwt");
                    movePage("/");
                }
                setId(res.data.id);
            })
            .catch(error => {
                console.log(error);
            });    
        }

    }, [setId, movePage, nickname])

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        if (id !== ''){
            axios.get('http://127.0.0.1:5001/posts/user/' + id, config)
            .then(res => {
                setDatas(res.data.reverse());
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [setDatas, id])

    return (
        <div className="feed_collection">
            {
                datas?.map(data => 
                    <div key={data.id}>
                        <Feed nickname={nickname} data={data} />
                    </div>
            )}
        </div>
    )
}

function MainContents({name, nickname}) {
    return (
        <div className="main_contents">
            <StoryCollection />
            <FeedCollection name={name} nickname={nickname}/>
        </div>
    )
}

function Profile({name, nickname}) {
    return (
        <div className="user_profile">
            <Link to={"/profile"} state={{nickname: nickname}}>
                <img src={hwei} alt="user_img" />
            </Link>
            <div className="id_name">
                <Link to={"/profile"} state={{nickname: nickname}}>
                    <p className="id">{nickname}</p>
                </Link>
                <p className="name">{name}</p>
            </div>
        </div>
    )
}

function ProfileChange({name, nickname}) {
    return (
        <div className="profile_change">
            <Profile name={name} nickname={nickname}/>
            <button className="change">전환</button>
        </div>
    )
}

function ProfileFollow() {
    return (
        <div className="profile_follow">
            <Profile name={"회원님을 위한 추천"} nickname={"donggyu"}/>
            <button className="follow">팔로우</button>
        </div>
    )
}
function SuggestToUser() {
    return (
        <div className="suggest_to_user">
            <div className="title">
                <p>회원님을 위한 추천</p>
                <button className="show_all">모두 보기</button>
            </div>
            <ProfileFollow />
            <ProfileFollow />
            <ProfileFollow />
            <ProfileFollow />
            <ProfileFollow />
        </div>
    )
}

function Foot() {
    return (
        <div className="foot">
            <div className="url_collection">
                <ul>
                    <li><a href="#!" alt="url">소개</a></li>
                    <li><a href="#!" alt="url">도움말</a></li>
                    <li><a href="#!" alt="url">홍보 센터</a></li>
                    <li><a href="#!" alt="url">API</a></li>
                    <li><a href="#!" alt="url">채용 정보</a></li>
                </ul>
                <ul>
                    <li><a href="#!" alt="url">개인정보처리방침</a></li>
                    <li><a href="#!" alt="url">약관</a></li>
                    <li><a href="#!" alt="url">위치</a></li>
                    <li><a href="#!" alt="url">언어</a></li>
                    <li className="last"><a href="#!" alt="url">Meta Verified</a></li>
                </ul>
            </div>
            <div className="end_word">© 2024 INSTAGRAM FROM META</div>
        </div>
    )
}

function SubContents({name, nickname}) {
    return (
        <div className="sub_contents">
            <div className="contents_box">
                <ProfileChange name={name} nickname={nickname}/>
                <SuggestToUser />
                <Foot />
            </div>
        </div>
    )
}

function Main() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const movePage = useNavigate();

    useEffect(() => {
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
            setName(res.data.name);
            setNickname(res.data.nickname);
        })
        .catch(error => {
            console.log(error);
        })
    }, [name, nickname, movePage])

    return (
        <div className="main">
            <MainContents name={name} nickname={nickname}/>
            <SubContents name={name} nickname={nickname}/>
        </div>   
    )
}

export default Main;