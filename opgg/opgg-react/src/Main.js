import React, { useState } from "react";
import "./Main.css";
import playericon from './image/playericon.webp';
import t1icon from './image/t1icon.webp';
import rioticon from './image/rioticon.png';

function YellowAdvBox({sentence}) {
    const [isHidden, setIsHidden] = useState(true);

    function hiddenAdv() {
        setIsHidden(false);
    }

    return(
        <div>
            {isHidden && (
            <div className="advertisement_sentence">
                <div>
                    <a href="#!">
                        {sentence}
                    </a>
                    <button onClick={hiddenAdv}>X</button>
                </div>
            </div>
            )}
        </div>
    )
}

function PlayerLevel({level}) {
    return(
        <div className="player_icon">
            <img src={playericon} alt="playericon" width="100px" height="100px" />
            <button type="button">{level}</button>
        </div>
    )
}

function PlayerInfoDetail() {
    return (
        <>
            <div className="player_info_detail">
                <div className="player_tier">
                    <button>S2023 S2 Master</button>
                    <button>S2023 S1 Master</button>
                    <button>S2022 Diamond 1</button>
                    <button class="more_tier_button">More Season Tier ▼</button>
                </div>
                <div className="player_name">
                    <p id="name">Hide on bush</p>
                    <p id="hashcode">#KR1</p>
                    <button>☆</button>
                </div>
                <div className="prev_name_and_rank">
                    <a href="#!">
                        <img src={t1icon} alt="t1icon" width="20px" height="20px" />
                        <p id="pro_name">T1 [Faker]</p>
                        <p id="arrow">{'>'}</p>
                    </a>
                    <p>|</p>
                    <p>Prev. Hide on bush</p>
                    <p>|</p>
                    <a href="#!">
                        <p>래더 랭킹 400 위 (상위 0.0184%)</p>
                    </a>
                </div>
                <div className="setting_profile">
                    <button>
                        <img src={rioticon} alt="rioticon" width="18px" height="18px" />
                        <p>라이엇 계정 연동하고 나만의 프로필을 설정해보세요.</p>
                        <p id="arrow">{'>'}</p>
                    </button>
                </div>
                <div className="button_collections">
                    <button id="renewal">전적 갱신</button>
                    <button id="tier_graph">티어 그래프</button>
                </div>
                <div className="recent_update">
                    <p>최근 업데이트: 한 시간 전</p>
                </div>
            </div>
            <div className="video_ad">
                영상광고
            </div>
        </>
    )
}

function PlayerGameInfoBtn() {
    return (
        <div className="player_game_info">
            <div className="button_collections">
                <nav>
                    <ul>
                        <li><a href="#!"><span id="total">종합</span></a></li>
                        <li><a href="#!"><span>챔피언</span></a></li>
                        <li><a href="#!"><span>인게임 정보</span></a></li>
                        <li><a href="#!"><span><img src={require('./image/tfticon_choco.svg').default} alt="tfticon" width="20px" height="20px"/>전략적 팀 전투</span></a></li>
                    </ul>
                </nav>
                <div class="op_score">
                    <span>OP스코어로 더 정확한 내 실력을 확인해 보세요</span>
                    <button>V</button>
                </div>
            </div>
        </div>
    )
}

function PlayerInfo() {
    return(
        <>
            <div className="player_rank_info">
                <div className="player_rank_info_box">
                    <PlayerLevel level={744} />
                    <PlayerInfoDetail />
                </div>
            </div>
            <PlayerGameInfoBtn />
        </>
    )
}

function Main() {
    return(
        <div>
            <YellowAdvBox sentence="게임 메이트와 한 게임 어때요? 첫 게임 99% 할인!" />
            <PlayerInfo />
        </div>
    )
}
export default Main;