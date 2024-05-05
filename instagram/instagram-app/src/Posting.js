import React, { useState } from "react";
import "./Posting.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Posting() {
    const [imageSrc, setImageSrc] = useState('');
    const [content, setContent] = useState('');

    const movePage = useNavigate(); 

    const setPreviewImg = (event) => {

        var reader = new FileReader();

        reader.onload = function(event) {
            setImageSrc(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    const postHandle = (e) => {
        e.preventDefault();
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("jwt"),
            },
        };
        
        axios.post('http://127.0.0.1:5001/posts', {
            image: imageSrc,
            content: content,
        }, config)
        .then(res => {
            if (res.data.result === "로그인 실패"){
                localStorage.removeItem("jwt");
                movePage("/");
            }
            console.log(res.data);
            movePage("/main")
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="posting">
            <form className="post_form" onSubmit={postHandle}>
                <div className="img_box">
                    <label htmlFor="image">이미지 선택(클릭)</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={setPreviewImg}/>
                </div>
                <div className="text_box">
                    <label htmlFor="text">텍스트 입력</label>
                    <textarea id="text" name="caption" rows="4" cols="50" onChange={(e) => setContent(e.target.value)} />
                </div>
                <button className="upload_btn">업로드</button>
                <img src={imageSrc} alt="preview_img" style={{maxWidth: "200px"}} />
            </form>
        </div>
    )
}

export default Posting;