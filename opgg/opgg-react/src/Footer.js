import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div class="total">
                <section>
                    <div>
                        <a href="#!">
                            <img src={require('./image/opgglogo.svg').default} alt="opgglogo" height="20px" width="100px" />
                        </a>
                    </div>
                    <div>
                        <strong class="title">OP.GG</strong>
                        <nav class="list">
                            <a href="#!">About OP.GG</a>
                            <a href="#!">Company</a>
                            <a href="#!">Blog</a>
                            <a href="#!">로고 히스토리</a>
                        </nav>
                    </div>
                    <div>
                        <strong class="title">Products</strong>
                        <nav class="list">
                            <a href="#!">리그오브레전드</a>
                            <a href="#!">전략적 팀 전투</a>
                            <a href="#!">발로란트</a>
                            <a href="#!">배틀그라운드</a>
                            <a href="#!">오버워치2</a>
                            <a href="#!">이스포츠</a>
                            <a href="#!">톡피지지</a>
                            <a href="#!">Gigs</a>
                            <a href="#!">Duo</a>
                        </nav>
                    </div>
                    <div>
                        <strong class="title">Apps</strong>
                        <nav class="list">
                            <a href="#!">OP.GG for Desktop</a>
                            <a href="#!">OP.GG Palworld for Desktop</a>
                            <a href="#!">OP.GG Stats for Android</a>
                            <a href="#!">OP.GG Stats for iOS</a>
                            <a href="#!">OP.GG TFT for Android</a>
                            <a href="#!">OP.GG TFT for iOS</a>
                            <a href="#!">TalkG for Android</a>
                            <a href="#!">TalkG for iOS</a>
                        </nav>
                    </div>
                    <div>
                        <strong class="title">Resources</strong>
                        <nav class="list">
                            <a href="#!" style={{fontWeight: "bold"}}>개인정보처리방침</a>
                            <a href="#!">이용약관</a>
                            <a href="#!">도움말</a>
                            <a href="#!">이메일 문의하기</a>
                            <a href="#!">고객센터 문의</a>
                        </nav>
                    </div>
                    <div>
                        <strong class="title">More</strong>
                        <nav class="list">
                            <a href="#!">제휴</a>
                            <a href="#!">광고</a>
                            <a href="#!">채용</a>
                        </nav>
                    </div>
                </section>
                <section class="footer_bottom">
                    <div class="company_info">
                        <p>주식회사 오피지지 (OP.GG) | 통신판매업신고: 제2019-서울강남-01973호 | 사업자등록번호: 295-88-00023 | 대표자: 최상락</p>
                        <p>서울특별시 강남구 테헤란로 507, 1층, 2층(삼성동, WeWork빌딩) | 전화: 02-455-9903 (평일 09:00 ~ 18:00) | 이메일: service@op.gg</p>
                        <p style={{marginTop: "8px"}}>© 2012-2024 OP.GG. OP.GG is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of</p>
                        <p>Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
                    </div>
                    <nav class="sns">
                        <a href="#!"><img src={require('./image/instagramicon.svg').default} alt="instagramicon" width="25px" height="25px" /></a>
                        <a href="#!"><img src={require('./image/youtubeicon.svg').default} alt="youtubeicon" width="25px" height="25px" /></a>
                        <a href="#!"><img src={require('./image/xicon.svg').default} alt="xicon" width="25px" height="25px" /></a>
                        <a href="#!"><img src={require('./image/facebookicon.svg').default} alt="facebookicon" width="25px" height="25px" /></a>
                    </nav>
                </section>
            </div>
        </footer>
    )
}

export default Footer;