import { useState } from "react";
import logo from '../Img/logo.svg';
import '../CSS/Header.css';

function Header() {
    const [HeaderClass,setHeaderClass]=useState("Header");
    let handleScroll=()=> {
        
        if(window.pageYOffset>1) {
            setHeaderClass("Header white-header")
        }
        else {
            setHeaderClass("Header");
        }
    }

    window.onscroll=handleScroll;
  return (
    <div className={HeaderClass}>
        <img src={logo} alt='logo'/>
        <ul className="navbar">
            <li key='1'><a href="/">Trang chủ</a></li>
            <li key='2'><a href="/News">Thông tin</a></li>
            <li key='3'><a href="/">Phòng chống</a></li>
            <li key='4'><a href="/about-us">Về chúng tôi</a></li>
        </ul>
    </div>
  );
}

export default Header;
