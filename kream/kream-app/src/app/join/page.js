'use client'
import styles from "./join.module.css";
import { useEffect, useState } from "react";

function ModalPage({clickModal}) {
    return (
        <div className={styles.modalPage} onClick={clickModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <p className={styles.word}>사이즈 선택</p>
                <div className={styles.sizeBox}>
                    <button className={styles.size}>220</button>
                    <button className={styles.size}>225</button>
                    <button className={styles.size}>230</button>
                    <button className={styles.size}>235</button>
                    <button className={styles.size}>240</button>
                    <button className={styles.size}>245</button>
                    <button className={styles.size}>250</button>
                    <button className={styles.size}>255</button>
                    <button className={styles.size}>260</button>
                    <button className={styles.size}>265</button>
                    <button className={styles.size}>270</button>
                    <button className={styles.size}>275</button>
                    <button className={styles.size}>280</button>
                    <button className={styles.size}>285</button>
                    <button className={styles.size}>290</button>
                    <button className={styles.size}>295</button>
                    <button className={styles.size}>300</button>
                </div>
                <button className={styles.okBtn} onClick={clickModal}>확인</button>
            </div>
        </div>
    )
}

export default function Join() {
    const [showModal, setShowModal] = useState(false);

    const clickModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <div className={styles.joinPage}>
                <div className={styles.joinBox}>
                    <h1 className={styles.title}>회원가입</h1>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>이메일 주소*</p>
                        <input className={styles.input} type="text" placeholder="예) kream@kream.co.kr" />
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>비밀번호*</p>
                        <input className={styles.input} type="password" placeholder="영문, 숫자, 특수문자 조합 8-16자"/>
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>추천인 코드</p>
                        <input className={styles.input} type="text" placeholder="추천인 코드를 입력하세요"/>
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.word}>신발 사이즈</p>
                        <div className={styles.select}>
                            <input className={styles.inputItem} type="text" placeholder="선택하세요" readOnly/>
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
                    <button className={styles.button}>가입하기</button>
                </div>
            </div>
            {showModal && <ModalPage clickModal={clickModal}/>}
        </>
    )
}