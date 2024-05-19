'use client'

import Image from "next/image";
import styles from "./order.module.css";
import shoes from "/public/shoes.webp";
import { useState } from "react";

function RequestModal({clickModal}) {
    return (
        <div className={styles.requestModal} onClick={clickModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <p className={styles.title}>배송 요청사항</p>
                <div className={styles.requestCollection}>
                    <p className={styles.oneRequest}>요청사항 없음</p>
                    <p className={styles.oneRequest}>문 앞에 놓아주세요</p>
                    <p className={styles.oneRequest}>경비실에 맡겨 주세요</p>
                    <p className={styles.oneRequest}>파손 위험 상품입니다. 배송 시 주의해주세요</p>
                    <p className={styles.oneRequest}>직접 입력</p>
                </div>
            </div>
        </div>
    )
}

export default function Order() {
    const [showModal, setShowModal] = useState(false);

    const clickModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <div className={styles.orderPage}>
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
                <div className={styles.deliveryInfo}>
                    <div className={styles.address}>
                        <p className={styles.title}>배송 주소</p>
                        <div className={styles.addressInput}>
                            <input className={styles.inputBox} type="text" placeholder="주소"/>
                            <button className={styles.sendBtn}>보내기</button>
                        </div>
                    </div>
                    <button className={styles.requestBtn} onClick={clickModal}>요청사항 없음</button>
                </div>
            </div>
            {showModal && <RequestModal clickModal={clickModal}/>}
        </>
    )
}