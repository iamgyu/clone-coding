import React from "react";
import "./Main.css"
import hwei from './image/Hwei.webp';
import feedImg from './image/img.jpg';

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

function Feed() {
    return (
        <div className="feed">
            <div className="head">
                <div className="user_info">
                    <img src={hwei} alt="user_img" />
                    <p className="name">donggyu</p>
                    <p className="time">•<a href="#!">1일</a></p>
                </div>
                <button className="more_option">•••</button>
            </div>
            <div className="main_img">
                <img src={feedImg} alt="img" />
            </div>
            <div className="bottom">
                <div className="button_collection">
                    <div className="left_button">
                        <img src={require('./image/alarm.svg').default} alt="heart" />
                        <img src={require('./image/search.svg').default} alt="comment"/>
                        <img src={require('./image/message.svg').default} alt="send"/>
                    </div>
                    <img src={require('./image/more.svg').default} alt="store" />
                </div>
                <div className="text_collection">
                    <div className="like">좋아요 100개</div>
                    <div className="main_text">
                        <p className="name">donggyu</p>
                        <p className="text">안녕하세요 어쩌구저쩌구...</p>
                        <button className="show_more_btn">더 보기</button>
                    </div>
                    <p className="show_all_comment_btn">댓글 40개 모두 보기</p>
                    <input className="input_comment" type="text" placeholder="댓글 달기..."></input>
                </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}

function FeedCollection() {
    return (
        <div className="feed_collection">
            <Feed />
            <Feed />
        </div>
    )
}

function MainContents() {
    return (
        <div className="main_contents">
            <StoryCollection />
            <FeedCollection />
        </div>
    )
}

function Profile({name}) {
    return (
        <div className="user_profile">
            <img src={hwei} alt="user_img" />
            <div className="id_name">
                <p className="id">donggyu</p>
                <p className="name">{name}</p>
            </div>
        </div>
    )
}

function ProfileChange() {
    return (
        <div className="profile_change">
            <Profile name={"김동규"}/>
            <button className="change">전환</button>
        </div>
    )
}

function ProfileFollow() {
    return (
        <div className="profile_follow">
            <Profile name={"회원님을 위한 추천"}/>
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

function SubContents() {
    return (
        <div className="sub_contents">
            <div className="contents_box">
                <ProfileChange />
                <SuggestToUser />
                <Foot />
            </div>
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