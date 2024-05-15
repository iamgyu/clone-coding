import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/kreamlogo.jpeg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KREAM | 한정판 거래의 FLEX",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar_total">
          <div className="navbar_top">
            <Link href="/">고객센터</Link>
            <Link href="/">마이페이지</Link>
            <Link href="/">관심</Link>
            <Link href="/">알림</Link>
            <Link href="/login">로그인</Link>
          </div>
          <div className="navbar">
            <div className="logo">
              <Link href="/"><Image src={logo} alt="logo" width="120" height="24"/></Link>
            </div>
            <div className="nav">
              <Link href="/">HOME</Link>
              <Link href="/">STYLE</Link>
              <Link href="/">SHOP</Link>
              <Link href="/"><Image src="/search.svg" alt="search" width="28" height="28" /></Link>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}