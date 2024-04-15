import React from "react";
import "./Header.css";
import lolicon from './image/lolicon.png';
import homeImg from './image/homeImg.webp';

function MainGame({src, alt, title}) {
    return(
        <li>
            <span className="main_game">
                <img src={src} alt={alt} width='24' height='24' />
                <span>{title}</span>
            </span>
        </li>
    )
}

function OtherGame({src, alt, title}) {
    return(
        <li>
            <a className="other_game" href="#!">
                <img src={src} alt={alt} width='24' height='24' />
                <span>{title}</span>
            </a>
        </li>
    )
}

function Navigation() {
    return (
        <div className="page_collections">
            <a className="main_logo" href="#!">
                <img src={require('./image/opgglogo.svg').default} alt="opgglogo" width='70' height='16'/>
            </a>
            <ul className="game_title">
                <MainGame src={require('./image/lollogo.svg').default} alt="lollogo" title="리그오브레전드" />
                <OtherGame src={require('./image/pallogo.svg').default} alt="pallogo" title="펠월드" />
                <OtherGame src={require('./image/dskapplogo.svg').default} alt="dskapplogo" title="데스크톱" />
                <OtherGame src={require('./image/tftlogo.svg').default} alt="tftlogo" title="전략적 팀 전투" />
                <OtherGame src={require('./image/vallogo.svg').default} alt="vallogo" title="발로란트" />
                <OtherGame src={require('./image/pubglogo.svg').default} alt="pubglogo" title="배틀그라운드" />
                <OtherGame src={require('./image/overwatchlogo.svg').default} alt="overwatchlogo" title="오버워치2" />
                <OtherGame src={require('./image/esportslogo.svg').default} alt="esportslogo" title="이스포츠" />
                <OtherGame src={require('./image/talklogo.svg').default} alt="talklogo" title="톡피지지" />
                <OtherGame src={require('./image/gigslogo.svg').default} alt="gigslogo" title="Gigs" />
                <OtherGame src={require('./image/duologo.svg').default} alt="duologo" title="Duo" />
            </ul>
        </div>
    )
}

function Search() {
    return (
        <div className="search_box">
            <div className="img_and_search">
                <a className="homeImg" href="#!">
                    <img src={homeImg} alt="homeImg" width='70' height='50'/>
                </a>
                <div class="search">
                    <div class="country">
                        <button type="button">KR ▼</button>
                    </div>
                    <input id="player_name" type="text" placeholder="플레이어 이름+ #KR1"/>
                    <button class="search_button" type="button">
                        <img src={require('./image/ggicon.svg').default} alt="ggcion" width="40" height="28"/>
                    </button>
                </div>
                <div class="patchnote">
                    <button type="button">
                        <img src={lolicon} alt="lolicon" width="16" height="16"/>
                        14.4 패치노트 보기
                    </button>
                </div>
            </div>
        </div>
    )
}

function Header() {
    return(
        <header>
            <Navigation />
            <Search />
        </header>
    )
}

export default Header;