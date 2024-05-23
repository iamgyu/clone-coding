'use client';

import styles from "./login.module.css";
import Image from "next/image";
import logo from "/public/kreamlogo.jpeg";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function NavBar() {
    const [loginState, setLoginState] = useState(false);
  
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

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginFail, setLoginFail] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (loginFail) {
          const timer = setTimeout(() => {
            setLoginFail(false);
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [loginFail]);

    const loginHandle = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:5001/users/login', {
            email: email,
            password: password
        })
        .then(res => {
            if (res.data.result === "로그인 성공") {
                axios.defaults.headers.common[
                    "Authorization"
                  ] = `Bearer ${res.data.jwt}`;
                Cookies.set('jwt', res.data.jwt);
                router.push("/");
            } else {
                setLoginFail(true);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        <>
        <NavBar />
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <div className={styles.logoImage}>
                    <Image src={logo} alt="logo" width="120" height="24"/>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.word}>이메일 주소</p>
                    <input className={styles.input} type="text" placeholder="예) kream@kream.co.kr" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.word}>비밀번호</p>
                    <input className={styles.input} type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className={styles.button} onClick={loginHandle}>로그인</button>
                <div className={styles.joinNav}>
                    <Link href="/join">이메일 가입</Link>
                    <Link href="/">이메일 찾기</Link>
                    <Link href="/">비밀번호 찾기</Link>
                </div>
            </div>
        </div>
        {loginFail && 
            <div className={styles.loginFail}>
                <div className={styles.loginFailBox}>로그인 실패</div>
            </div>}
        </>
    );
}

export default Login;