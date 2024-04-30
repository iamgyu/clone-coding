import React from "react";
import "./Posting.css";

function Posting() {
    return (
        <div className="posting">
            <form className="post_form" method="post" encType="multipart/form-data">
                <div className="img_box">
                    <label for="image">이미지 선택(클릭)</label>
                    <input type="file" id="image" name="image" accept="image/*" />
                </div>
                <div className="text_box">
                    <label for="text">텍스트 입력</label>
                    <textarea id="text" name="caption" rows="4" cols="50"></textarea>
                </div>
                <button className="upload_btn">업로드</button>
            </form>
        </div>
    )
}

export default Posting;