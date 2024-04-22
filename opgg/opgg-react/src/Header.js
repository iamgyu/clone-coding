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

function Search({setName}) {
    const handleSubmit = (event) => {
        setName(event.target.elements.player_name.value);
        console.log(event.target.elements.player_name.value);
    }

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
                    <form onSubmit={handleSubmit}>
                        <input id="player_name" type="text" placeholder="플레이어 이름+ #KR1"/>
                        <button class="search_button" type="submit">
                            <img src={require('./image/ggicon.svg').default} alt="ggcion" width="40" height="28"/>
                        </button>
                    </form>
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

function Menu({title}) {
    if (title === "게임 모드") {
        return (
            <li>
                <a href="#!">
                    <span className="gamemode">{title}</span>
                </a>
             </li>
        )
    }

    return (
        <li>
            <a href="#!">
                <span>{title}</span>
            </a>
        </li>
    )
}

function MainMenu() {
    return (
        <div className="main_menu">
            <nav>
                <ul className="main_collections">
                    <Menu title="홈" />
                    <Menu title="챔피언 분석" />
                    <Menu title="게임 모드" />
                    <Menu title="우르프" />
                    <Menu title="통계" />
                    <Menu title="랭킹" />
                    <Menu title="프로관전" />
                    <Menu title="멀티서치" />
                    <Menu title="커뮤니티" />
                    <Menu title="강의" />
                </ul>
                <ul className="my_page">
                    <li>
                        <a href="#!">
                            <img src={require('./image/duologo.svg').default} alt="duologo" width="24px" height="24px" />
                            <span>마이페이지</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

function Header({setName}) {
    return(
        <header>
            <Navigation />
            <Search setName={setName}/>
            <MainMenu />
        </header>
    )
}

export default Header;