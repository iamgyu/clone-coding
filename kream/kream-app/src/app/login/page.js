'use client';

import styles from "./login.module.css";
import Image from "next/image";
import logo from "/public/kreamlogo.jpeg";
import Link from "next/link";

function Login() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <div className={styles.logoImage}>
                    <Image src={logo} alt="logo" width="120" height="24"/>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.word}>이메일 주소</p>
                    <input className={styles.input} type="text" placeholder="예) kream@kream.co.kr" />
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.word}>비밀번호</p>
                    <input className={styles.input} type="password" />
                </div>
                <button className={styles.button}>로그인</button>
                <div className={styles.joinNav}>
                    <Link href="/">이메일 가입</Link>
                    <Link href="/">이메일 찾기</Link>
                    <Link href="/">비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;