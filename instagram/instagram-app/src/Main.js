import React from "react";
import "./Main.css"
import hwei from './image/Hwei.webp';

function OneStory() {
    return (
        <div className="one_story">
            <div className="story_img">
                <img src={hwei} alt="user_img" />
            </div>
            <p>st4rlit__</p>
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

function MainContents() {
    return (
        <div className="main_contents">
            <StoryCollection />
        </div>
    )
}

function SubContents() {
    return (
        <div className="sub_contents">
            ㅇㅇ
        </div>
    )
}

function Main() {
    return (
        <div className="main">
            <MainContents />
            <SubContents />
        </div>   
    )
}

export default Main;