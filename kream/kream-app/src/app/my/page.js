'use client'

import Link from "next/link";
import styles from "./my.module.css";

function Navigation() {
    return (
        <div className={styles.navigation}>
            <p className={styles.title}>마이 페이지</p>
            <div className={styles.info}>
                <p className={styles.infoTitle}>쇼핑 정보</p>
                {["구매 내역", "판매 내역", "보관 판매", "관심"].map((text, index) => (
                        <Link key={index} href={"/my"} className={styles.link}>{text}</Link>
                ))}
            </div>
            <div className={styles.info}>
                <p className={styles.infoTitle}>내 정보</p>
                {["로그인 정보", "프로필 관리", "판매자 등급", "주소록", "결제 정보", "판매 정산 계좌", "현금영수증 정보", "포인트", "쿠폰"].map((text, index) => (
                        <Link key={index} href={"/my"} className={styles.link}>{text}</Link>
                ))}
            </div>
        </div>
    )
}

function MyPageInfo() {
    return (
        <div className={styles.myPageBox}>
            <div className={styles.myProfile}>
                <div className={styles.myInfo}>
                    <div className={styles.profieImg}></div>
                    <div className={styles.nameAndMail}>
                        <p className={styles.name}>abcd</p>
                        <p className={styles.email}>abcd@naver.com</p>
                    </div>
                </div>
                <div className={styles.profileChangeBtn}>
                    <button className={styles.button}>프로필 관리</button>
                    <button className={styles.button}>내 스타일</button>
                </div>
            </div>
            <PurchaceHistory />
            <InterestInfo />
        </div>
    )
}

function PurchaceHistory() {
    return(
        <div className={styles.purchaceHistory}>
            <div className={styles.purchaceTitle}>
                <p className={styles.title}>구매 내역</p>
                <p className={styles.showMore}>더보기</p>
            </div>
            <div className={styles.purchaceCount}>
                <div className={styles.oneBox}>
                    <p>전체</p>
                    <p>0</p>
                </div>
                <div className={styles.oneBox}>
                    <p>전체</p>
                    <p>0</p>
                </div>
                <div className={styles.oneBox}>
                    <p>전체</p>
                    <p>0</p>
                </div>
                <div className={styles.oneBox}>
                    <p>전체</p>
                    <p>0</p>
                </div>
            </div>
            <div className={styles.purchaceHistoryInfo}>
                거래 내역이 없습니다.
            </div>
        </div>
    )
}

function InterestInfo() {
    return (
        <div className={styles.interestBox}>
            <div className={styles.interestTitle}>
                <p className={styles.title}>관심 상품</p>
                <p className={styles.showMore}>더보기</p>
            </div>
            <div className={styles.interestInfo}>
                추가하신 관심 상품이 없습니다.
            </div>
        </div>
    )
}

export default function My() {
    return(
        <div className={styles.myPage}>
            <Navigation />
            <MyPageInfo />
        </div>
    )
}