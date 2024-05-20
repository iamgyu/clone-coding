'use client'

import Image from "next/image";
import styles from "./order.module.css";
import shoes from "/public/shoes.webp";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

function RequestModal({clickModal, setRequestText}) {
    const [storeText, setStoreText] = useState("");

    const clickRequestBtn = (text) => {
        setStoreText(text);
    }

    const applyBtn = (text) => {
        setRequestText(text);
        clickModal();
    }

    return (
        <div className={styles.requestModal} onClick={clickModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <p className={styles.title}>배송 요청사항</p>
                <div className={styles.requestCollection}>
                    {["요청사항 없음", "문 앞에 놓아주세요", "경비실에 맡겨 주세요", "파손위험 상품입니다. 배송 시 주의해주세요", "직접 입력"].map((text, index) => (
                        <button 
                            key={index} className={styles.oneRequest} onClick={() => clickRequestBtn(text)}>
                            {text}
                        </button>
                    ))}
                </div>
                <div className={styles.btnCollection}>
                    <button className={styles.cancelBtn} onClick={clickModal}>취소</button>
                    <button className={styles.applyBtn} onClick={() => applyBtn(storeText)}>적용하기</button>
                </div>
            </div>
        </div>
    )
}

function ProductInfo() {
    return (
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
    )
}

function DeliveryInfo({clickModal, requestText}) {
    const [focusedDiv, setFocusedDiv] = useState(null);

    const handleDivClick = (divId) => {
        setFocusedDiv(divId);
    };

    return (
        <div className={styles.deliveryInfo}>
            <div className={styles.address}>
                <p className={styles.title}>배송 주소</p>
                <div className={styles.addressInput}>
                    <input className={styles.inputBox} type="text" placeholder="주소"/>
                    <button className={styles.sendBtn}>보내기</button>
                </div>
                <button className={styles.requestBtn} onClick={clickModal}>{requestText}</button>
            </div>
            <div className={styles.method}>
                <p className={styles.methodTitle}>배송 방법</p>
                <div className={styles.selectMethod}>
                    <div className={classNames(styles.info, {[styles.infoColor]: focusedDiv === "div1"})} onClick={() => handleDivClick("div1")}>
                        <div className={styles.img}></div>
                        <div className={styles.infoDetail}>
                            <p className={styles.title}>일반배송 3,000원</p>
                            <p className={styles.detail}>검수 후 배송 ・ 9-11일 내 도착 예정</p>
                        </div>
                    </div>
                    <div className={classNames(styles.info, {[styles.infoColor]: focusedDiv === "div2"})} onClick={() => handleDivClick("div2")}>
                        <div className={styles.img}></div>
                        <div className={styles.infoDetail}>
                            <p className={styles.title}>창고보관 첫 30일 무료</p>
                            <p className={styles.detail}>배송 없이 창고에 보관 ・ 빠르게 판매 가능</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PaymentInfo() {
    const [focusedBtn, setFocusedBtn] = useState(null);

    const handleBtnClick = (btnId) => {
        setFocusedBtn(btnId);
    };
    return(
        <div className={styles.paymentInfo}>
            <p className={styles.paymentTitle}>결제 방법</p>
            <div className={styles.easyPayment}>
                <p className={styles.title}>계좌 간편결제</p>
                <button className={styles.registBtn}>계좌를 등록하세요</button>
            </div>
            <div className={styles.easyPayment}>
                <p className={styles.title}>카드 간편결제</p>
                <button className={styles.registBtn}>카드를 등록하세요</button>
            </div>
            <div className={styles.normalPayment}>
                <p className={styles.title}>일반 결제</p>
                <div className={styles.btnCollection}>
                    <button onClick={() => handleBtnClick("btn1")} className={classNames(styles.button, {[styles.buttonFocus]: focusedBtn === "btn1"})}>신용카드</button>
                    <button onClick={() => handleBtnClick("btn2")} className={classNames(styles.button, {[styles.buttonFocus]: focusedBtn === "btn2"})}>네이버페이</button>
                    <button onClick={() => handleBtnClick("btn3")} className={classNames(styles.button, {[styles.buttonFocus]: focusedBtn === "btn3"})}>카카오페이</button>
                    <button onClick={() => handleBtnClick("btn4")} className={classNames(styles.button, {[styles.buttonFocus]: focusedBtn === "btn4"})}>토스페이</button>
                    <button onClick={() => handleBtnClick("btn5")} className={classNames(styles.button, {[styles.buttonFocus]: focusedBtn === "btn5"})}>페이코</button>
                </div>
            </div>
            <p className={styles.warningText}>체결 후 결제 정보 변경은 불가하며 분할 납부 변경은 카드사 문의 바랍니다.
            단, 카드사별 정책에 따라 분할 납부 변경 시 수수료가 발생할 수 있습니다.</p>
            <div className={styles.benefitCollection}>
                <p className={styles.benefitTitle}>계좌 간편 결제</p>
                <div className={styles.benefitInfo}>
                    <p>최대 5만 포인트 적립 & 수수료 할인</p>
                    <p className={styles.showMore}>더보기</p>
                </div>
            </div>
            <div className={styles.benefitCollection}>
                <p className={styles.benefitTitle}>네이버페이</p>
                <div className={styles.benefitInfo}>
                    <p>포인트 최대 4% 적립</p>
                    <p className={styles.showMore}>더보기</p>
                </div>
            </div>
            <div className={styles.benefitCollection}>
                <p className={styles.benefitTitle}>카카오페이</p>
                <div className={styles.benefitInfo}>
                    <p>즉시할인 최대 4만원</p>
                    <p className={styles.showMore}>더보기</p>
                </div>
            </div>
            <div className={styles.benefitCollection}>
                <p className={styles.benefitTitle}>현대카드</p>
                <div className={styles.benefitInfo}>
                    <p>18개월/24개월 특별 할부 혜택</p>
                    <p className={styles.showMore}>더보기</p>
                </div>
            </div>
            <div className={styles.benefitCollection}>
                <p className={styles.benefitTitle}>삼성카드</p>
                <div className={styles.benefitInfo}>
                    <p>10만원 이상 LINK 청구할인 3%</p>
                    <p className={styles.showMore}>더보기</p>
                </div>
            </div>
            <div className={styles.benefitCollection}>
                <p className={styles.benefitTitle}>국민카드</p>
                <div className={styles.benefitInfo}>
                    <p>즉시할인 4%!+특별 할부 혜택</p>
                    <p className={styles.showMore}>더보기</p>
                </div>
            </div>
        </div>
    )
}

function FinalOrderInfo() {
    return (
        <>
        <div className={styles.finalOrderInfo}>
            <p className={styles.finalOrderTitle}>최종 주문정보</p>
            <div className={styles.buyNow}>
                <p className={styles.title}>즉시 구매가</p>
                <p className={styles.price}>85,000원</p>
            </div>
            <div className={styles.expense}>
                <p className={styles.title}>검수비</p>
                <p className={styles.price}>무료</p>
            </div>
            <div className={styles.expense}>
                <p className={styles.title}>수수료</p>
                <p className={styles.price}>2,800원</p>
            </div>
            <div className={styles.expense}>
                <p className={styles.title}>배송비</p>
                <p className={styles.price}>3,000원</p>
            </div>
        </div>
        <div className={styles.totalPrice}>
            <p className={styles.title}>총 결제금액</p>
            <p className={styles.price}>90,800원</p>
        </div>
        </>
    )
}

export default function Order() {
    const [showModal, setShowModal] = useState(false);
    const [requestText, setRequestText] = useState("요청사항 없음");

    const clickModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <div className={styles.orderPage}>
                <ProductInfo />
                <DeliveryInfo clickModal={clickModal} requestText={requestText}/>
                <PaymentInfo />
                <FinalOrderInfo />
                <div className={styles.paymentBtn}>
                    <Link href={"/"}>
                        <button className={styles.button}>90,800원</button>           
                    </Link>
                </div>
            </div>
            {showModal && <RequestModal clickModal={clickModal} setRequestText={setRequestText} />}
        </>
    )
}