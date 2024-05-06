import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PostPage.css"
import axios from "axios";

function PostPage() {
    const location = useLocation();
    const postId = location.state.postId;

    const [data, setData] = useState([]); // 게시물 데이터

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };

        axios.get('http://127.0.0.1:5001/posts/' + postId, config)
        .then(res => {
            console.log(res.data);
            setData(res.data);
        })
        .catch(error => {
            console.log(error);
        });

    }, [setData, postId]);

    return (
        <div className="post_page">
            <img src={data.image} alt="post_img" />
        </div>
    )
}

export default PostPage;