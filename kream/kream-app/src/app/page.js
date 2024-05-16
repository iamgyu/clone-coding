'use client'

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

function OneProductBox() {
  return (
    <div className={styles.oneProductBox}>
      <div className={styles.imgBox}>
        <div className={styles.numberBox}>1</div>
        <div className={styles.volumeNum}>거래 204</div>
        <button className={styles.saveBtn}>저장</button>
      </div>
      <div className={styles.brandAndName}>
        <p className={styles.brand}>Nike</p>
        <p className={styles.name}>Nike Cortez Midnight Navy</p>
      </div>
      <div className={styles.priceBox}>
        <p className={styles.price}>82,000원</p>
        <p className={styles.word}>즉시 구매가</p>
      </div>
    </div>
  )
}

function ProductRank() {
  const [productCount, setProductCount] = useState(5);

  const addMoreProducts = () => {
    setProductCount(prevCount => prevCount + 5);
  };

  return (
      <div className={styles.productRank}>
        <p className={styles.title}>남성 신발 인기 순위</p>
        <div className={styles.wordAndBtn}>
          <p>조회, 관심, 거래 급상승(최근 3일)</p>
          <p className={styles.btn}>더보기</p>
        </div>
        <div className={styles.productCollection}>
          {
            [...Array(productCount)].map((_, index) => (
            <OneProductBox key={index} />
          ))}
        </div>
        <div className={styles.showMoreBtn}>
          <button className={styles.btn} onClick={addMoreProducts}>더보기</button>
        </div>
      </div>
  );
}

export default function Home() {
  return (
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
        <ProductRank />
        <ProductRank />
        <ProductRank />
      </div>
    </main>
  );
}
