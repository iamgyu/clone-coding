'use client'
import styles from "./join.module.css";
import logo from "/public/kreamlogo.jpeg";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function ModalPage({clickModal, setShoeSize}) {
    return (
        <div className={styles.modalPage} onClick={clickModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <p className={styles.word}>사이즈 선택</p>
                <div className={styles.sizeBox}>
                    {[220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300].map((size) => (
                        <button
                            key={size}
                            className={styles.size}
                            onClick={() => setShoeSize(size)}>
                            {size}
                        </button>
                    ))}
                </div>
                <button className={styles.okBtn} onClick={clickModal}>확인</button>
            </div>
        </div>
    )
}

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

export default function Join() {
    const [showModal, setShowModal] = useState(false); // 모달창 보이게 하는 변수
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shoeSize, setShoeSize] = useState(0);
    const [joinFail, setJoinFail] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (joinFail) {
          const timer = setTimeout(() => {
            setJoinFail(false);
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [joinFail]);

    const clickModal = () => {
        setShowModal(!showModal);
    }

    const joinHandle = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:5001/users/join', {
            email: email,
            password: password,
            shoe_size: shoeSize
        })
        .then(res => {
            if (res.data.result === "회원가입 성공"){
                router.push("/");
            } else {
                setJoinFail(true);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <NavBar />
            <div className={styles.joinPage}>
                <div className={styles.joinBox}>
                    <h1 className={styles.title}>회원가입</h1>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>이메일 주소*</p>
                        <input className={styles.input} type="text" placeholder="예) kream@kream.co.kr" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>비밀번호*</p>
                        <input className={styles.input} type="password" placeholder="영문, 숫자, 특수문자 조합 8-16자" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>추천인 코드</p>
                        <input className={styles.input} type="text" placeholder="추천인 코드를 입력하세요"/>
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>신발 사이즈</p>
                        <div className={styles.select}>
                            <input className={styles.inputItem} type="text" placeholder={shoeSize === 0 ? "선택하세요" : shoeSize} readOnly/>
                            <button className={styles.selectSize} onClick={clickModal}>{'>'}</button>
                        </div>
                    </div>
                    <div className={styles.checkBox}>
                        <label>
                            <input type='checkbox'id='my_checkbox' />
                            [필수] 만 14세 이상이며 모두 동의합니다.
                        </label>
                        <label>
                            <input type='checkbox'id='my_checkbox' />
                            [선택] 광고성 정보 수신에 모두 동의합니다.
                        </label>
                    </div>
                    <button className={styles.button} onClick={joinHandle}>가입하기</button>
                </div>
            </div>
            {showModal && <ModalPage clickModal={clickModal} setShoeSize={setShoeSize}/>}
            {joinFail && 
            <div className={styles.joinFail}>
                <div className={styles.joinFailBox}>회원가입 실패</div>
            </div>}
        </>
    )
}