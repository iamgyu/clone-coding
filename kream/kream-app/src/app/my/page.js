'use client'

import Link from "next/link";
import styles from "./my.module.css";
import { useEffect, useState } from "react";
import logo from "/public/kreamlogo.jpeg";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";

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

function MyPageInfo({email, nickname, orderData, interestData}) {
    return (
        <div className={styles.myPageBox}>
            <div className={styles.myProfile}>
                <div className={styles.myInfo}>
                    <div className={styles.profieImg}></div>
                    <div className={styles.nameAndMail}>
                        <p className={styles.name}>{nickname}</p>
                        <p className={styles.email}>{email}</p>
                    </div>
                </div>
                <div className={styles.profileChangeBtn}>
                    <button className={styles.button}>프로필 관리</button>
                    <button className={styles.button}>내 스타일</button>
                </div>
            </div>
            <PurchaceHistory  orderData={orderData}/>
            <InterestInfo interestData={interestData}/>
        </div>
    )
}

function PurchaceHistory({orderData}) {
    return(
        <div className={styles.purchaceHistory}>
            <div className={styles.purchaceTitle}>
                <p className={styles.title}>구매 내역</p>
                <p className={styles.showMore}>더보기</p>
            </div>
            <div className={styles.purchaceCount}>
                <div className={styles.oneBox}>
                    <p>전체</p>
                    <p>{orderData.length}</p>
                </div>
                <div className={styles.oneBox}>
                    <p>입찰중</p>
                    <p>0</p>
                </div>
                <div className={styles.oneBox}>
                    <p>진행중</p>
                    <p>0</p>
                </div>
                <div className={styles.oneBox}>
                    <p>종료</p>
                    <p>0</p>
                </div>
            </div>
            <div className={styles.purchaceHistoryInfo}>
                    {
                    orderData.map((order) => (
                        <div key={order.id} className={styles.oneOrder}>
                            <p>주문 번호 : {order.id}</p>
                            <p>상품 가격 : {order.price}</p>
                            <p>주문 시간 : {order.ordered_at}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

function InterestInfo({interestData}) {
    const deleteInterest = (interestId) => {
        axios.delete('http://127.0.0.1:5001/interests/' + interestId, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: Cookies.get('jwt'),
            },
        })
        .then(res => {
            window.location.reload();
        })
    }

    return (
        <div className={styles.interestBox}>
            <div className={styles.interestTitle}>
                <p className={styles.title}>관심 상품</p>
                <p className={styles.showMore}>더보기</p>
            </div>
            <div className={styles.interestInfo}>
                {
                    interestData.map((interest) => (
                        <div key={interest.id} className={styles.oneInterest}>
                            <p>브랜드 : {interest.item_brand}</p>
                            <p>제품명 : {interest.item_name}</p>
                            <p>즉시 구매가 : {interest.min_price}</p>
                            <p>사이즈 : {interest.size_type}</p>
                            <button onClick={() => deleteInterest(interest.id)}>관심 삭제</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function NavBar({loginState, setLoginState}) {

    useEffect(() => {
      if (Cookies.get('jwt') !== undefined){
        setLoginState(true);
      }
    }, [loginState]);
  
    const handleLogout = () => {
      setLoginState(false);
      Cookies.remove('jwt');
    }
  
    return (
      <div className="navbar_total">
        <div className="navbar_top">
          <Link href="/" scroll={false}>고객센터</Link>
          {loginState ? <Link href="/my" scroll={false}>마이페이지</Link> : <Link href="/login" scroll={false}>마이페이지</Link>}
          <Link href="/" scroll={false}>관심</Link>
          <Link href="/" scroll={false}>알림</Link>
          {loginState ? <Link href="/" onClick={handleLogout} scroll={false}>로그아웃</Link> : <Link href="/login" scroll={false}>로그인</Link>}
        </div>
        <div className="navbar">
          <div className="logo">
            <Link href="/" scroll={false}><Image src={logo} alt="logo" width="120" height="24"/></Link>
          </div>
          <div className="nav">
            <Link href="/" scroll={false}>HOME</Link>
            <Link href="/" scroll={false}>STYLE</Link>
            <Link href="/" scroll={false}>SHOP</Link>
            <Link href="/" scroll={false}><Image src="/search.svg" alt="search" width="28" height="28" /></Link>
          </div>
        </div>
      </div>
    )
}

export default function My() {
    const [loginState, setLoginState] = useState(false);
    const [userId, setUserId] = useState(0);
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [orderData, setOrderData] = useState([]);
    const [interestData, setInterestData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5001/users', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: Cookies.get('jwt'),
            },
        })
        .then(res => {
            setEmail(res.data.email);
            setNickname(res.data.nickname);
            setUserId(res.data.id);
        })
    },[]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5001/orders', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: Cookies.get('jwt'),
            },
          })
          .then(res => {
            setOrderData(Array.isArray(res.data) ? res.data : [res.data]);
          })
      }, []);

      useEffect(() => {
        axios.get('http://127.0.0.1:5001/interests', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: Cookies.get('jwt'),
            },
        })
        .then(res => {
            setInterestData(res.data);
        })
      }, []);

    return(
        <>
            <NavBar loginState={loginState} setLoginState={setLoginState} />
            <div className={styles.myPage}>
                <Navigation />
                <MyPageInfo email={email} nickname={nickname} orderData={orderData} interestData={interestData}/>
            </div>
        </>
    )
}