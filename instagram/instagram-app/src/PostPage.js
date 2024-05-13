import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PostPage.css"
import axios from "axios";

function PostPage() {
    const location = useLocation();
    const postId = location.state.postId;
    const userId = location.state.userId;

    const [data, setData] = useState([]); // 게시물 데이터
    const [userData, setUserData] = useState([]); // 유저 데이터
    const [commentData, setCommentData] = useState([]); // 댓글 데이터
    const [content, setContent] = useState(''); // 다는 댓글용

    const movePage = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.get('http://127.0.0.1:5001/users/' + userId, config)
        .then(res => {
            setUserData(res.data);
        })
        .catch(error => {
            console.log(error);
        });

    }, [setUserData, userId]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.get('http://127.0.0.1:5001/posts/' + postId, config)
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            console.log(error);
        });

    }, [setData, postId]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.get('http://127.0.0.1:5001/comments/post/' + postId, config)
        .then(res => {
            setCommentData(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [postId])

    const goProfile = () => {
        movePage("/profile", {state:{nickname: userData.nickname}});
    }

    const deletePost = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.delete('http://127.0.0.1:5001/posts/' + postId, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        });

        movePage("/profile", {state:{nickname: userData.nickname}});
    }

    const likePost = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.post('http://127.0.0.1:5001/likes', {
            post_id: postId
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
                post_id: postId
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
            post_id: postId
        }, config)
        .then(res => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        });
    }

    const deleteComment = (commentId) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.delete('http://127.0.0.1:5001/comments/' + commentId, config)
        .then(res => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="post_page">
            <div className="img_box">
                <img src={data.image} alt="post_img" />
            </div>
            <div className="detail_box">
                <div className="nickname_box">
                    <div className="user_info">
                        <img src={userData.image} alt="user_img" />
                        <p>{userData.nickname}</p>
                    </div>
                    <div className="btn_collection">
                        <button onClick={deletePost}>게시물 삭제</button>
                        <button onClick={goProfile}>뒤로가기</button>
                    </div>
                </div>
                <div className="comment_box">
                    <div className="content">
                        <div className="image">
                            <img src={userData.image} alt="user_img" />
                        </div>
                        <div className="word">
                            <p className="nickname">{userData.nickname}</p>
                            <p className="detail">{data.content}</p>
                        </div>
                    </div>
                    <div className="comments">
                        {
                            commentData?.map(comment =>
                                <div className="one_comment" key={comment.id}>
                                    <div className="comment_info">
                                        <p>{comment.nickname}</p>
                                        <p>{comment.content}</p>
                                    </div>
                                    <button onClick={() => deleteComment(comment.id)}>Delete</button>
                                </div>
                        )}
                    </div>
                </div>
                <div className="like_box">
                    <div className="btn_collection">
                        <button onClick={likePost}>좋아요</button>
                        <button onClick={deleteLike}>좋아요 취소</button>
                    </div>
                    <p className="like_cnt">좋아요 : {data.like_number}개</p>
                    <p className="post_time">{data.created_at}</p>
                </div>
                <div className="input_box">
                    <input className="input" type="text" placeholder="댓글 달기..." onChange={(e) => setContent(e.target.value)} />
                    <button onClick={commentPost}>게시</button>
                </div>
            </div>
        </div>
    )
}

export default PostPage;