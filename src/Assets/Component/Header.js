import { useState } from "react";
import logo from '../../logo.svg';
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
            <li key='1'><a>Trang chủ</a></li>
            <li key='2'><a>Thông tin</a></li>
            <li key='3'><a>Về chúng tôi</a></li>
        </ul>
    </div>
  );
}

export default Header;
