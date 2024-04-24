import React, { useState } from "react";
import "./Main.css";
import playericon from './image/playericon.webp';
import t1icon from './image/t1icon.webp';
import rioticon from './image/rioticon.png';
import grandmastericon from './image/grandmastericon.webp';
import hwei from './image/Hwei.webp';
import spell from './image/flashicon.webp';
import item from './image/itemicon.webp';

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

function PlayerInfoDetail({name}) {
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
                    <p id="name">{name}</p>
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
                        <li><a href="#!"><span style={{color:"#A88A67"}}><img src={require('./image/tfticon_choco.svg').default} alt="tfticon" width="20px" height="20px"/>전략적 팀 전투</span></a></li>
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

function PlayerInfo({name}) {
    return(
        <>
            <div className="player_rank_info">
                <div className="player_rank_info_box">
                    <PlayerLevel level={744} />
                    <PlayerInfoDetail name={name}/>
                </div>
            </div>
            <PlayerGameInfoBtn />
        </>
    )
}

function SoloRankInfo({player}) {
    const winrate = Math.round(player.win / (player.win + player.lose) * 100);
    
    return (
        <div className="solo_rank">
            <p id="word">솔로랭크</p>
            <div>
                <span id="tier_icon">
                    <span><img src={grandmastericon} alt="grandmastericon" width="72px" height="72px"/></span>
                </span>
                <span id="tier_and_score">
                    <p id="tier_name">Grandmaster</p>
                    <p id="tier_score">{player.point}LP</p>
                </span>
                <span id="win_and_lose">
                    <p>{player.win}승 {player.lose}패</p>
                    <p>승률 {winrate}%</p>
                </span>
            </div>
        </div>
    )
}

function FreeRankInfo() {
    return (
        <div class="free_rank">
            <p id="free_rank_ko">자유랭크</p>
            <p id="unranked">Unranked</p>
        </div>
    )
}

function FindDuo() {
    return (
        <div class="find_duo">
            <a href="#!">
                <img src={require('./image/duologo_color.svg').default} alt="duologo_color" height="24px" width="24px" />
                <p style={{color:"white", fontWeight:"bolder", fontSize:"14px"}}>DUO</p>
                <p style={{color:"gray", fontSize:"14px", marginLeft:"8px"}}>팀원 찾기 {'>'}</p>
            </a>
        </div>
    )
}

function ChampionInfo({src, name}) {
    return (
        <div className="champion_info">
            <div className="champion_name_and_img">
                <div className="champion_img">
                    <img src={src} alt="champion" width="30px" height="30px" style={{borderRadius: "50%"}} />
                </div>
                <div>
                    <a href="#!" style={{textDecoration: "none"}}><p style={{color: "white", fontSize: "12px"}}>{name}</p></a>
                    <p style={{color: "gray", fontSize: "11px", marginTop: "4px"}}>CS 206.8 (8.3)</p>
                </div>
            </div>
            <div className="champion_grad">
                <p style={{color: "rgb(80, 170, 154)", fontSize: "12px", fontWeight: "bolder"}}>3.56:1 평점</p>
                <p style={{color: "gray", fontSize: "11px", marginTop: "4px"}}>5.5 / 3.5 / 7.2</p>
            </div>
            <div className="champion_winrate">
                <p id="winrate" style={{color: "gray", fontSize: "12px"}}>54%</p>
                <p style={{color: "gray", fontSize: "11px", marginTop: "4px"}}>24 게임</p>
            </div>
        </div>
    )
   
}

function UsedChampion() {
    return(
        <div className="used_champion">
            <div className="choose_rank">
                <button style={{backgroundColor:"rgb(81, 81, 98)", fontWeight:"bolder"}}>S2024 S1</button>
                <button>솔로랭크</button>
                <button>자유랭크</button>
            </div>
            <ChampionInfo src={hwei} name="흐웨이"/>
            <ChampionInfo src={hwei} name="흐웨이"/>
            <ChampionInfo src={hwei} name="흐웨이"/>
            <ChampionInfo src={hwei} name="흐웨이"/>
            <ChampionInfo src={hwei} name="흐웨이"/>
            <ChampionInfo src={hwei} name="흐웨이"/>
            <ChampionInfo src={hwei} name="흐웨이"/>
            <div className="show_another_season">
                <button>더 보기+다른 시즌 보기 {'>'}</button>
            </div>
        </div>
    ) 
}

function ChampionWinrateBar({src, name}) {
    return (
        <div className="champion_and_winrate_recent_version">
            <div className="champion_name_and_img">
                <div className="champion_img">
                    <img src={src} alt="champion" style={{borderRadius: "50%"}}width="24px" height="24px" />
                </div>
                <a href="#!"><p>{name}</p></a>
            </div>
            <div className="winrate_and_bar">
                <div className="win_and_lose_bar">
                    <div className="winbar" style={{width: "62%"}}>
                        <p>8승</p>
                    </div>
                    <div className="losebar" style={{width: "38%"}}>
                        <p>5패</p>
                    </div>
                </div>
                <p id="winrate">62%</p>
            </div>
        </div>
    )
}

function Recent7DayWinrate() {
    return (
        <div className="recent_7day_winrate">
            <div id="sentence">
                <p>최근 7일간 랭크 승률</p>
            </div>
            <div id="champion_winrate_word">
                <p>챔피언</p>
                <p>승률</p>
            </div>
            <ChampionWinrateBar src={hwei} name="흐웨이" />
            <ChampionWinrateBar src={hwei} name="흐웨이" />
            <ChampionWinrateBar src={hwei} name="흐웨이" />
            <ChampionWinrateBar src={hwei} name="흐웨이" />
            <ChampionWinrateBar src={hwei} name="흐웨이" />
            <ChampionWinrateBar src={hwei} name="흐웨이" />
            <ChampionWinrateBar src={hwei} name="흐웨이" />
        </div>
    )
}

function SmallAdvBox() {
    return (
        <div className="small_advertisement_box">
            광고
        </div>
    )
}

function WithPlayer({iconsrc, playerName, code}) {
    return (
        <div className="player">
            <div className="player_name_and_icon">
                <div className="player_icon">
                    <img src={iconsrc} alt="summonericon" style={{borderRadius: "50%"}} width="24px" height="24px" />
                </div>
                <a href="#!">
                    <p className="name">{playerName}</p>
                    <p className="code">{code}</p>
                </a>
            </div>
            <p id="word">2</p>
            <p id="word">2 - 0</p>
            <p id="winrate">100%</p>
        </div>
    )
}

function PlayWithSameTeam() {
    return (
        <div className="play_with_same_team">
            <div className="sentence">
                <p>같은 팀으로 게임한 소환사들 (최근 20 게임)</p>
            </div>
            <div className="title">
                <p id="summoner">소환사</p>
                <p id="game">게임</p>
                <p id="win-lose">승-패</p>
                <p id="winrate">승률</p>
            </div>
            <WithPlayer iconsrc={hwei} playerName="죽기장인" code="#KR12" />
            <WithPlayer iconsrc={hwei} playerName="죽기장인" code="#KR12" />
            <WithPlayer iconsrc={hwei} playerName="죽기장인" code="#KR12" />
            <WithPlayer iconsrc={hwei} playerName="죽기장인" code="#KR12" />
            <WithPlayer iconsrc={hwei} playerName="죽기장인" code="#KR12" />
        </div>
    )
}

function ChooseRank() {
    return (
        <div className="choose_rank">
            <div className="button_collections">
                <button style={{backgroundColor: "rgb(81, 81, 98)"}}>전체</button>
                <button>솔로랭크</button>
                <button>자유랭크</button>
                <button>큐 타입{'▼'}</button>
            </div>
            <div className="search_champion">
                <div className="search_icon">
                    <img src={require('./image/searchicon.svg').default} alt="searchicon" width="24px" height="24px" />
                </div>
                <input type="text" placeholder="챔피언 검색" />
            </div>
        </div>
    )
}

function TotalRecordInfo() {
    return (
        <div className="total_record_info">
            <div className="win_and_lose">
                <p id="recent_20_game">20전 10승 10패</p>
                <div className="graph_and_kill_death">
                    <div className="record_graph">
                        <div className="graph_center">
                            50%
                        </div>
                    </div>
                    <div className="kill_death">
                        <div id="kill_death_assist"><p id="kill">4.4</p><p>/</p><p id="death">3.8</p><p>/</p><p id="assist">6.8</p></div>
                        <p id="avg_kill_death">2.95:1</p>
                        <p id="kill_involvement">킬관여 47%</p>
                    </div>
                </div>
            </div>
            <div className="used_champion_recent_20_game">
                <p id="word">플레이한 챔피언 (최근 20게임)</p>
                <div className="champions">
                    <div className="champion">
                        <img src={hwei} alt="champion" width="24px" height="24px" />
                        <p id="winrate">100%</p>
                        <p id="win_lose">(4승 0패)</p>
                        <p id="grade">11.5 평점</p>
                    </div>
                    <div className="champion">
                        <img src={hwei} alt="champion" width="24px" height="24px" />
                        <p id="winrate">100%</p>
                        <p id="win_lose">(4승 0패)</p>
                        <p id="grade">11.5 평점</p>
                    </div>
                    <div className="champion">
                        <img src={hwei} alt="champion" width="24px" height="24px" />
                        <p id="winrate">100%</p>
                        <p id="win_lose">(4승 0패)</p>
                        <p id="grade">11.5 평점</p>
                    </div>
                </div>
            </div>
            <div className="position_graph">
                <p id="word">선호 포지션 (랭크)</p>
                <div className="graphs">
                    <div className="graph">
                        <div className="bar"><div className="play" style={{height: "15%"}}></div></div>
                        <img src={require('./image/topicon.svg').default} alt="topicon" width="16px" height="16px" />
                    </div>
                    <div className="graph">
                        <div className="bar"><div className="play"></div></div>
                        <img src={require('./image/jgicon.svg').default} alt="jgicon" width="16px" height="16px" />
                    </div>
                    <div className="graph">
                        <div className="bar"><div className="play" style={{height: "65%"}}></div></div>
                        <img src={require('./image/midicon.svg').default} alt="midicon" width="16px" height="16px" />
                    </div>
                    <div className="graph">
                        <div className="bar"><div className="play" style={{height: "10%"}}></div></div>
                        <img src={require('./image/bottomicon.svg').default} alt="bottomicon" width="16px" height="16px" />
                    </div>
                    <div className="graph">
                        <div className="bar"><div className="play" style={{height: "10%"}}></div></div>
                        <img src={require('./image/supicon.svg').default} alt="supicon" width="16px" height="16px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function TotalGameInfo() {
    return (
        <div className="total_game_info">
            <ChooseRank />
            <TotalRecordInfo />
        </div>
    )
}

function OneGameTotalInfo() {
    return (
        <div className="all_info">
            <div className="main">
                <div className="info">
                    <a href="#!" className="champion">
                        <img src={hwei} alt="hwei" style={{borderRadius: "50%"}} width="48px" height="48px" />
                        <span id="level">15</span>
                    </a>
                    <div className="spell_and_rune">
                        <div className="layout">
                            <img src={spell} alt="spell" style={{borderRadius: "4px"}} width="23px" height="23px" />
                            <img src={spell} alt="spell" style={{borderRadius: "4px"}} width="23px" height="23px" />
                        </div>
                        <div className="layout">
                            <img src={spell} alt="spell" style={{borderRadius: "4px"}} width="23px" height="23px" />
                            <img src={spell} alt="spell" style={{borderRadius: "4px"}} width="23px" height="23px" />
                        </div>
                    </div>
                    <div className="kda_stat">
                        <div className="kda">
                            <p id="kill">7</p>
                            <p id="dash">/</p>
                            <p id="death">5</p>
                            <p id="dash">/</p>
                            <p id="assist">3</p>
                        </div>
                        <div className="avg_grade">2.00:1 평점</div>
                    </div>
                    <div className="divider"></div>
                    <div className="sub_info">
                        <p id="kill_involvement">킬관여 38%</p>
                        <p>제어 와드 1</p>
                        <p>cs230 (9.7)</p>
                        <p>challenger</p>
                    </div>
                </div>
            </div>
            <div className="sub">
                <div className="item">
                    <img src={item} alt="item" width="23px" height="23px" />
                    <img src={item} alt="item" width="23px" height="23px" />
                    <img src={item} alt="item" width="23px" height="23px" />
                    <img src={item} alt="item" width="23px" height="23px" />
                    <img src={item} alt="item" width="23px" height="23px" />
                    <img src={item} alt="item" width="23px" height="23px" />
                    <img src={item} alt="item" width="23px" height="23px" style={{borderRadius: "50%"}}/>
                </div>
                <div className="tag">
                    <button>더블킬</button>
                    <button>6th</button>
                    <button>불굴의 의지</button>
                </div>
            </div>
        </div>
    )
}

function GamePlayer({champion, playerName}) {
    return (
        <div className="player">
            <img src={champion} alt="champion" width="16px" height="16px" />
            <p>{playerName}</p>
        </div>
    )
}

function GamePlayers() {
    return (
        <div className="players">
            <GamePlayer champion={hwei} playerName="player1"/>
            <GamePlayer champion={hwei} playerName="player2"/>
            <GamePlayer champion={hwei} playerName="player3"/>
            <GamePlayer champion={hwei} playerName="player4"/>
            <GamePlayer champion={hwei} playerName="player5"/>
            <GamePlayer champion={hwei} playerName="player6"/>
            <GamePlayer champion={hwei} playerName="player7"/>
            <GamePlayer champion={hwei} playerName="player8"/>
            <GamePlayer champion={hwei} playerName="player9"/>
            <GamePlayer champion={hwei} playerName="player10"/>
        </div>
    )
}

function ShowMoreInfoPlayer() {
    return (
        <div className="player">
            <div className="champion_spell_rune_name">
                <a href="#!" className="champion">
                    <img src={hwei} alt="champion" style={{borderRadius: "50%"}}width="32px" height="32px" />
                    <span id="level">13</span>
                </a>
                <div className="spell_and_rune">
                    <div className="layout">
                        <img src={spell} alt="spell" style={{borderRadius: "4px"}} width="16px" height="16px" />
                        <img src={spell} alt="spell" style={{borderRadius: "4px"}} width="16px" height="16px" />
                    </div>
                    <div className="layout">
                        <img src={spell} alt="spell" style={{borderRadius: "50%", backgroundColor: "black"}} width="16px" height="16px" />
                        <img src={spell} alt="spell" style={{borderRadius: "4px"}} width="16px" height="16px" />
                    </div>
                </div>
                <div className="name">
                    <p id="nickname">돌격대장</p>
                    <p id="tier">Grandmaster</p>
                </div>
            </div>
            <div className="op_score">
                <p id="score">6</p>
                <button id="rank">4th</button>
            </div>
            <div className="kda">
                <p id="total">2/1/7 (36%)</p>
                <p id="avg">9.00:1</p>
            </div>
            <div className="damage">
                <div className="given_damage">
                    <p id="num">13,228</p>
                    <div className="total_bar">
                        <div className="damage_bar"></div>
                    </div>
                </div>
                <div className="received_damage">
                    <p id="num">16,700</p>
                    <div className="total_bar">
                        <div className="damage_bar"></div>
                    </div>
                </div>
            </div>
            <div className="ward">
                <p id="control_ward">4</p>
                <p id="install_remove">9 / 3</p>
            </div>
            <div className="cs">
                <p id="total">156</p>
                <p id="per_minute">분당 7.4</p>
            </div>
            <div className="items">
                <div className="item"><img src={item} alt="item" style={{borderRadius: "4px"}} width="22px" height="22px" /></div>
                <div className="item"><img src={item} alt="item" style={{borderRadius: "4px"}} width="22px" height="22px" /></div>
                <div className="item"><img src={item} alt="item" style={{borderRadius: "4px"}} width="22px" height="22px" /></div>
                <div className="item"><img src={item} alt="item" style={{borderRadius: "4px"}} width="22px" height="22px" /></div>
                <div className="item"><img src={item} alt="item" style={{borderRadius: "4px"}} width="22px" height="22px" /></div>
                <div className="item"></div>
                <div className="item"><img src={item} alt="item" style={{borderRadius: "4px"}} width="22px" height="22px" /></div>
            </div>
        </div>
    )
}

function ObjectInfo() {
    return (
        <div className="object_info">
            <div className="win_object_count">
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">0</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">1</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">2</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">3</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">4</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">5</p></div>
            </div>
            <div className="total_kill_and_gold">
                <div className="bar">
                    <p>Total Kill</p>
                    <div className="win" style={{width: "65%"}}>25</div>
                    <div className="lose" style={{width: "35%"}}>13</div>
                </div>
                <div className="bar">
                    <p>Total Kill</p>
                    <div className="win" style={{width: "55%"}}>43,495</div>
                    <div className="lose" style={{width: "45%"}}>38,431</div>
                </div>
            </div>
            <div className="lose_object_count">
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">0</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">1</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">2</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">3</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">4</p></div>
                <div className="object"><img src={require('./image/Nashor-icon.svg').default} alt="nashor" width="16px" height="16px" /><p id="count">5</p></div>
            </div>
        </div>
    )
}

function ShowMoreInfoWinGame() {
    return (
        <div className="show_more_info">
            <div className="button_collections">
                <button style={{marginLeft: "0px", backgroundColor: "rgb(81, 81, 98)", fontWeight: "bolder"}}>종합</button>
                <button>OP 스코어</button>
                <button>팀 분석</button>
                <button>빌드</button>
                <button>etc</button>
            </div>
            <div className="contents">
                <div className="win_team">
                    <div className="title">
                        <p id="win"><span>승리</span>(레드팀)</p>
                        <p id="op_score">OP 스코어</p>
                        <p id="kda">KDA</p>
                        <p id="damage">피해량</p>
                        <p id="ward">와드</p>
                        <p id="cs">CS</p>
                        <p id="items">아이템</p>
                    </div>
                    <div className="main">
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                    </div>
                </div>
                <ObjectInfo />
                <div className="lose_team">
                    <div className="title">
                        <p id="lose"><span>패배</span>(레드팀)</p>
                        <p id="op_score">OP 스코어</p>
                        <p id="kda">KDA</p>
                        <p id="damage">피해량</p>
                        <p id="ward">와드</p>
                        <p id="cs">CS</p>
                        <p id="items">아이템</p>
                    </div>
                    <div className="main">
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                    </div>
                </div>
                <div className="url">
                    <div className="box">
                        <img src={require('./image/linkicon.svg').default} alt="linkicon" style={{padding: "0 8px"}} width="16px" height="16px" />
                        <input className="link" type="text" readOnly value="https://www.op.gg/summoners/kr/Hide%20on%20bush-KR1/matches/CNrwP4AK2XevxGAlHyUDoGG3EJlk8yrtkGg71sKg5W8%3D/1710089094000"/>
                    </div>
                    <button className="copy_btn">Copy Link</button>
                </div>
            </div>
            <div className="adv">
                광고
            </div>
        </div>
    )
}

function ShowMoreInfoLoseGame() {
    return (
        <div className="show_more_info">
            <div className="button_collections">
                <button style={{marginLeft: "0px", backgroundColor: "rgb(81, 81, 98)", fontWeight: "bolder"}}>종합</button>
                <button>OP 스코어</button>
                <button>팀 분석</button>
                <button>빌드</button>
                <button>etc</button>
            </div>
            <div className="contents">
                <div className="lose_team">
                    <div className="title">
                        <p id="lose"><span>패배</span>(레드팀)</p>
                        <p id="op_score">OP 스코어</p>
                        <p id="kda">KDA</p>
                        <p id="damage">피해량</p>
                        <p id="ward">와드</p>
                        <p id="cs">CS</p>
                        <p id="items">아이템</p>
                    </div>
                    <div className="main">
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                    </div>
                </div>
                <ObjectInfo />
                <div className="win_team">
                    <div className="title">
                        <p id="win"><span>승리</span>(레드팀)</p>
                        <p id="op_score">OP 스코어</p>
                        <p id="kda">KDA</p>
                        <p id="damage">피해량</p>
                        <p id="ward">와드</p>
                        <p id="cs">CS</p>
                        <p id="items">아이템</p>
                    </div>
                    <div className="main">
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                        <ShowMoreInfoPlayer />
                    </div>
                </div>
                <div className="url">
                    <div className="box">
                        <img src={require('./image/linkicon.svg').default} alt="linkicon" style={{padding: "0 8px"}} width="16px" height="16px" />
                        <input className="link" type="text" readOnly value="https://www.op.gg/summoners/kr/Hide%20on%20bush-KR1/matches/CNrwP4AK2XevxGAlHyUDoGG3EJlk8yrtkGg71sKg5W8%3D/1710089094000"/>
                    </div>
                    <button className="copy_btn">Copy Link</button>
                </div>
            </div>
            <div className="adv">
                광고
            </div>
        </div>
    )
}

function OneGame({outcome}) {

    const [infoOpen, setInfoOpen] = useState(false);
    const [buttonDir, setButtonDir] = useState('v');

    function btnClick() {
        if (infoOpen === false) {
            setInfoOpen(true);
            setButtonDir('^');
        } else {
            setInfoOpen(false);
            setButtonDir('v');
        }
    }

    const flag = () => {
        if (outcome === "win_game") {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="one_game">
            <div className={outcome}>
                <div className="edge"></div>
                <div className="contents">
                    <div className="rank_day_play_time">
                        <div className="group">
                            <p id="rank">솔랭</p>
                            <p>2일 전</p>
                        </div>
                        <div className="divider"></div>
                        <div className="group">
                            <p id="win_lose">승리</p>
                            <p>23분 44초</p>
                        </div>
                    </div>
                    <OneGameTotalInfo />
                    <GamePlayers />
                </div>
                <div className="buttons">
                    <button className="record"><img src={require('./image/recordicon.svg').default} alt="recordicon"/></button>
                    <button className="more_info" onClick={btnClick}>{buttonDir}</button>
                </div>
            </div>
            {infoOpen && (flag() ? <ShowMoreInfoWinGame /> : <ShowMoreInfoLoseGame />)}
        </div>
    )
}

function DetailOneGame() {
    return (
        <div className="detail_one_game">
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="lose_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <OneGame outcome="win_game" />
            <div class="show_more_game">
                <button>더 보기</button>
            </div>
        </div>
    )
}

function MainPage({player}) {
    return (
        <div className="main_page">
            <div className="advertisement_box">
                광고
            </div>
            <div className="detail_box">
                <div className="rank_and_used_champion">
                    <SoloRankInfo player={player}/>
                    <FreeRankInfo />
                    <FindDuo />
                    <UsedChampion />
                    <Recent7DayWinrate />
                    <SmallAdvBox />
                    <PlayWithSameTeam />
                </div>
                <div className="detail_game_info">
                    <TotalGameInfo />
                    <DetailOneGame />
                </div>
            </div>
            <div class="big_advertisement_box">
                광고
            </div>
        </div>
    )
}

function Main({player}) {
    return(
        <div className="main_box">
            <YellowAdvBox sentence="게임 메이트와 한 게임 어때요? 첫 게임 99% 할인!" />
            <PlayerInfo name={player.name}/>
            <MainPage player={player}/>
        </div>
    )
}
export default Main;