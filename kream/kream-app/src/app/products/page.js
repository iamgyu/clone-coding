'use client'

import styles from "./products.module.css";
import Image from "next/image";
import shoes from "/public/shoes.webp";
import logo from "/public/kreamlogo.jpeg";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import axios from "axios";


function ModalBuyPage({clickBuyModal, data, shoeSize}){
    const [selectBuySize, setSelectBuySize] = useState(0);
    const [orderSize, setOrderSize] = useState(0);

    const clickBuySize = (size, sizeId) => {
        setSelectBuySize(size);
        setOrderSize(sizeId);
    }

    return (
        <div className={styles.modalBuyPage} onClick={clickBuyModal}>
            <div className={styles.buyModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.mainTitle}>
                    <p className={styles.main}>구매하기</p>
                    <p className={styles.sub}>(가격단위 : 원)</p>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.img}>
                        <Image src={shoes} alt="shoes" width={80} height={80} />
                    </div>
                    <div className={styles.modelNumAndName}>
                        <p className={styles.modelNum}>{data.model}</p>
                        <p className={styles.engName}>{data.name}</p>
                        <p className={styles.korName}>{data.name}</p>
                    </div>
                </div>
                <div className={styles.sizeBox}>
                    {
                        shoeSize.map((size) => (
                            <button
                                key={size.id}
                                className={styles.size} 
                                onClick={() => clickBuySize(size.type, size.id)}>
                                {size.type}
                            </button>
                    ))}
                </div>
                <div className={styles.goOrderBtn}>
                    <Link href={{
                        pathname: '/order',
                        query: {
                            orderSize: orderSize
                        },
                    }} className={styles.btn}>
                        {selectBuySize}
                    </Link>
                </div>
            </div>
        </div>
    )
}

function ModalPage({clickModal, setSelectedSize, shoeSize}) {
    const handleSizeClick = (size) => {
        setSelectedSize(size);
      };

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
                            onClick={() => handleSizeClick(size.type)}>
                            {size.type}
                        </button>
                    ))}
                </div>
                <button className={styles.okBtn} onClick={clickModal}>확인</button>
            </div>
        </div>
    )
}

function InfoCollection({data}) {
    return (
        <div className={styles.infoCollection}>
            <div className={styles.oneInfoFirst}>
                <p className={styles.title}>최근 거래가</p>
                <p className={styles.detail}>{data.recent_price ? data.recent_price.toLocaleString() : "-"}원</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>발매가</p>
                <p className={styles.detail}>{data.release_price ? data.release_price.toLocaleString() : "-"}원</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>모델번호</p>
                <p className={styles.detail}>{data.model}</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>출시일</p>
                <p className={styles.detail}>{data.released_at}</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>대표 색상</p>
                <p className={styles.detail}>{data.color}</p>
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

function ModalInterestPage({clickInterestModal, shoeSize}) {
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
  
      clickInterestModal();
    }
  
    return (
        <div className={styles.modalPage} onClick={clickInterestModal}>
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

export default function Products() {
    const [loginState, setLoginState] = useState(false); // 로그인 상태
    const [showModal, setShowModal] = useState(false);
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [showInterestModal, setShowInterestModal] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [shoeSize, setShoeSize] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = new URL(location.href);

        axios.get('http://127.0.0.1:5001/items/' + url.searchParams.get('data'))
        .then(res => {
            setData(res.data);
        })
    },[])

    useEffect(() => {
        if(data.id !== undefined){
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
    }, [data])

    const clickInterestModal = () => {
        setShowInterestModal(!showInterestModal);
    }

    const clickBuyModal = () => {
        setShowBuyModal(!showBuyModal);
    }
        
    const goLogin = () => {
        router.push("/login");
    }

    const clickModal = () => {
        setShowModal(!showModal);
    }

    return(
        <>
            <NavBar loginState={loginState} setLoginState={setLoginState}/>
            <div className={styles.productPage}>
                <div className={styles.productInfo}>
                    <div className={styles.imgBox}>
                        <div className={styles.img}>
                            <Image src={shoes} alt="shoes" width={0} height={0} style={{width: "100%", height: "100%", display: "block"}} />
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.buyNow}>
                            <p className={styles.word}>즉시 구매가</p>
                            <p className={styles.price}>{data.min_price ? data.min_price.toLocaleString() : "-"}원</p>
                        </div>
                        <div className={styles.productName}>
                            <p className={styles.engName}>{data.name}</p>
                            <p className={styles.korName}>{data.name}</p>
                        </div>
                        <button className={styles.selectSize} onClick={loginState ? clickModal : goLogin}>
                            {selectedSize !== null ? selectedSize : "모든 사이즈"}
                        </button>
                        <InfoCollection data={data}/>
                        <div className={styles.buySellBtn}>
                            <button className={styles.buyBtn} onClick={loginState ? clickBuyModal : goLogin}>
                                <p className={styles.btnName}>구매</p>
                                <div className={styles.price}>
                                    <p className={styles.priceWord}>{data.min_price ? data.min_price.toLocaleString() : ""}</p>
                                    <p className={styles.word}>즉시 구매가</p>
                                </div>
                            </button>
                            <button className={styles.sellBtn}>
                                <p className={styles.btnName}>판매</p>
                                <div className={styles.price}>
                                    <p className={styles.priceWord}>80,000원</p>
                                    <p className={styles.word}>즉시 판매가</p>
                                </div>
                            </button>
                        </div>
                        <button className={styles.interestBtn} onClick={clickInterestModal}>관심상품 {data.interest_number}</button>
                        <div className={styles.extraBenefit}>
                            <div className={styles.titleAndMore}>
                                <p className={styles.title}>추가 혜택</p>
                                <p className={styles.more}>더보기</p>
                            </div>
                            <div className={styles.benefitDetail}>
                                <p className={styles.title}>포인트</p>
                                <p className={styles.detail}>계좌 간편결제 시 1% 적립</p>
                            </div>
                            <div className={styles.benefitDetail}>
                                <p className={styles.title}>결제</p>
                                <p className={styles.detail}>계좌간편결제 최대 5만 포인트 적립 & 수수료 할인</p>
                            </div>
                        </div>
                        <div className={styles.deliveryInfo}>
                            <p className={styles.infoTitle}>배송정보</p>
                            <div className={styles.info}>
                                <div className={styles.img}></div>
                                <div className={styles.infoDetail}>
                                    <p className={styles.title}>빠른배송 5,000원</p>
                                    <p className={styles.detail}>지금 결제 시 모레 5/20(월) 도착 예정</p>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.img}></div>
                                <div className={styles.infoDetail}>
                                    <p className={styles.title}>일반배송 3,000원</p>
                                    <p className={styles.detail}>검수 후 배송 ・ 9-11일 내 도착 예정</p>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.img}></div>
                                <div className={styles.infoDetail}>
                                    <p className={styles.title}>창고보관 첫 30일 무료</p>
                                    <p className={styles.detail}>배송 없이 창고에 보관 ・ 빠르게 판매 가능</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.brand}>
                            <div className={styles.img}></div>
                            <div className={styles.brandDetail}>
                                <p className={styles.title}>{data.brand}</p>
                                <p className={styles.detail}>{data.brand} · 관심 2.0만</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ModalPage clickModal={clickModal} setSelectedSize={setSelectedSize} data={data} shoeSize={shoeSize}/>}
            {showBuyModal && <ModalBuyPage clickBuyModal={clickBuyModal} data={data} shoeSize={shoeSize}/>}
            {showInterestModal && <ModalInterestPage clickInterestModal={clickInterestModal} shoeSize={shoeSize}/>}
        </>
    )
}