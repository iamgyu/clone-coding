'use client'

import styles from "./products.module.css";
import Image from "next/image";
import shoes from "/public/shoes.webp";
import { useState } from "react";
import Link from "next/link";

function ModalBuyPage({clickBuyModal}){
    const [selectBuySize, setSelectBuySize] = useState(0);

    const clickBuySize = (size) => {
        setSelectBuySize(size);
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
                        <p className={styles.modelNum}>FW7208</p>
                        <p className={styles.engName}>Adidas Gradas Collegiate Green</p>
                        <p className={styles.korName}>아디다스 그라다스 컬리지에이트 그린</p>
                    </div>
                </div>
                <div className={styles.sizeBox}>
                    {[220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300].map((size) => (
                        <button
                            key={size}
                            className={styles.size} 
                            onClick={() => clickBuySize(size)}>
                            {size}
                        </button>
                    ))}
                </div>
                <div className={styles.goOrderBtn}>
                    <Link href="/order" className={styles.btn}>
                        {selectBuySize}
                    </Link>
                </div>
            </div>
        </div>
    )
}

function ModalPage({clickModal, setSelectedSize}) {
    const handleSizeClick = (size) => {
        setSelectedSize(size);
      };

    return (
        <div className={styles.modalPage} onClick={clickModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <p className={styles.word}>사이즈 선택</p>
                <div className={styles.sizeBox}>
                    {[220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300].map((size) => (
                        <button
                            key={size}
                            className={styles.size}
                            onClick={() => handleSizeClick(size)}>
                            {size}
                        </button>
                    ))}
                </div>
                <button className={styles.okBtn} onClick={clickModal}>확인</button>
            </div>
        </div>
    )
}

function InfoCollection() {
    return (
        <div className={styles.infoCollection}>
            <div className={styles.oneInfoFirst}>
                <p className={styles.title}>최근 거래가</p>
                <p className={styles.detail}>118,000원</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>발매가</p>
                <p className={styles.detail}>79,000원</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>모델번호</p>
                <p className={styles.detail}>FW7208</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>출시일</p>
                <p className={styles.detail}>-</p>
            </div>
            <div className={styles.oneInfo}>
                <p className={styles.title}>대표 색상</p>
                <p className={styles.detail}>Footwear White/Collegiate Green/Metallic Gold</p>
            </div>
        </div>
    )
}

export default function Products() {
    const [showModal, setShowModal] = useState(false);
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);

    const clickBuyModal = () => {
        setShowBuyModal(!showBuyModal);
    }

    const clickModal = () => {
        setShowModal(!showModal);
    }

    return(
        <>
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
                            <p className={styles.price}>79,000원</p>
                        </div>
                        <div className={styles.productName}>
                            <p className={styles.engName}>Adidas Gradas Collegiate Green</p>
                            <p className={styles.korName}>아디다스 그라다스 컬리지에이트 그린</p>
                        </div>
                        <button className={styles.selectSize} onClick={clickModal}>{selectedSize !== null ? selectedSize : "모든 사이즈"}</button>
                        <InfoCollection />
                        <div className={styles.buySellBtn}>
                            <button className={styles.buyBtn} onClick={clickBuyModal}>
                                <p className={styles.btnName}>구매</p>
                                <div className={styles.price}>
                                    <p className={styles.priceWord}>79,000원</p>
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
                        <button className={styles.interestBtn}>관심상품 7,333</button>
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
                                <p className={styles.title}>Adidas</p>
                                <p className={styles.detail}>아디다스 · 관심 2.0만</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ModalPage clickModal={clickModal} setSelectedSize={setSelectedSize}/>}
            {showBuyModal && <ModalBuyPage clickBuyModal={clickBuyModal}/>}
        </>
    )
}