'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import logo from "/public/kreamlogo.jpeg";
import axios from "axios";
import { useRouter } from "next/navigation";

function OneProductBox({loginState, data, index, setModalState, setShoeSize}) {
  const router = useRouter();

  const handleStoreBtn = (e) => {
    e.preventDefault();
    setModalState(true);
    
    axios.get('http://127.0.0.1:5001/sizes/item/' + data.id, {
      headers: {
          'Content-Type': 'application/json',
          Authorization: Cookies.get('jwt'),
      },
    })
    .then(res => {
      setShoeSize(res.data);
    })
  }

  const handleStoreBtnNotLogin = (e) => {
    e.preventDefault();

    router.push("/login");
  }

  return (
    <div className={styles.oneProductBox}>
      <div className={styles.imgBox}>
        <div className={styles.numberBox}>{index + 1}</div>
        <div className={styles.volumeNum}>거래 {data.transaction_number}</div>
        <button className={styles.saveBtn} onClick={loginState ? handleStoreBtn : handleStoreBtnNotLogin}>저장</button>
      </div>
      <div className={styles.brandAndName}>
        <p className={styles.brand}>{data.brand}</p>
        <p className={styles.name}>{data.name}</p>
      </div>
      <div className={styles.priceBox}>
        <p className={styles.price}>{data.min_price ? data.min_price.toLocaleString() : "-"}원</p>
        <p className={styles.word}>즉시 구매가</p>
      </div>
    </div>
  )
}

function ProductRank({loginState, setModalState, setShoeSize, what}) {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  let productCategory;
  if (what === "신발")
    productCategory = "Shoes";
  else if(what === "가방")
    productCategory = "Bag";

  const addMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  useEffect(() => {
    axios.post('http://127.0.0.1:5001/items/group', {
      category: productCategory
    })
    .then(res => {
      setItems(res.data);
    })
  }, [])

  return (
      <div className={styles.productRank}>
        <p className={styles.title}>남성 {what} 인기 순위</p>
        <div className={styles.wordAndBtn}>
          <p>조회, 관심, 거래 급상승(최근 3일)</p>
          <p className={styles.btn}>더보기</p>
        </div>
        <div className={styles.productCollection}>
          {
            items.slice(0, visibleCount).map((data, index) => (
              <Link href={{
                  pathname: '/products',
                  query: {
                      data: data.id
                  },
                }} key={data.id}>
                <OneProductBox loginState={loginState} data={data} index={index} setModalState={setModalState} setShoeSize={setShoeSize}/>
              </Link>
          ))}
        </div>
        <div className={styles.showMoreBtn}>
          {
            visibleCount < items.length && (
            <button className={styles.btn} onClick={addMoreProducts}>더보기</button>
          )} 
        </div>
      </div>
  );
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

function ModalPage({clickModal, shoeSize}) {
  const [interestSizeId, setInterestSizeId] = useState(null);

  const handleInterestSize = (sizeId) => {
    setInterestSizeId(sizeId);
  }

  const clickInterestBtn = () => {
    axios.post('http://127.0.0.1:5001/interests', {
      size_id: interestSizeId,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: Cookies.get('jwt'),
    }})
    .then(res => {
      console.log(res.data);
    })

    clickModal();
  }

  return (
      <div className={styles.modalPage} onClick={clickModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <p className={styles.word}>사이즈 선택</p>
              <div className={styles.sizeBox}>
                  {
                    shoeSize.map((size) => (
                      <button
                          key={size.id}
                          className={styles.size}
                          onClick={() => handleInterestSize(size.id)}>
                          {size.type}
                      </button>
                  ))}
              </div>
              <button className={styles.okBtn} onClick={clickInterestBtn}>확인</button>
          </div>
      </div>
  )
}

export default function Home() {
  const [loginState, setLoginState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [shoeSize, setShoeSize] = useState([]);

  const clickModal = () => {
    setModalState(!modalState);
  }

  return (
    <>
      <NavBar loginState={loginState} setLoginState={setLoginState}/>
      <main className={styles.main}>
        <div className={styles.navigation}>
            <Link className={styles.bit} href="/">24렙비트</Link>
            <Link href="/">추천</Link>
            <Link className={styles.rank} href="/">랭킹</Link>
            <Link href="/">럭셔리</Link>
            <Link href="/">남성</Link>
            <Link href="/">여성</Link>
            <Link href="/">발견</Link>
            <Link href="/">이벤트</Link>
        </div>
        <div className={styles.productMainPage}>
          <ProductRank loginState={loginState} setModalState={setModalState} setShoeSize={setShoeSize} what={"신발"}/>
          <ProductRank loginState={loginState} setModalState={setModalState} setShoeSize={setShoeSize} what={"가방"}/>
          <ProductRank loginState={loginState} setModalState={setModalState} setShoeSize={setShoeSize} what={"신발"}/>
        </div>
      </main>
      {modalState && <ModalPage clickModal={clickModal} shoeSize={shoeSize}/>}
    </>
  );
}
