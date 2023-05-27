import { useState } from "react";
import logo from '../Img/logo.svg';
import bar from '../Img/bars-solid.svg'
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

    var [barClass,setBarClass]=useState('invisible');
    let handleBar=()=> {
        if(barClass==='invisible') {
            setBarClass('mobile-nav');
        }
        else setBarClass('invisible');
    }

    
  return (
    <div className={HeaderClass}>
        <img src={logo} alt='logo'/>
        <ul className="navbar">
            <li key='1'><a href="/" className={"/"===window.location.pathname?"curr-page":""}>Trang chủ</a></li>
            <li key='2'><a href="/News" className={"/News"===window.location.pathname?"curr-page":""}>Thông tin</a></li>
            <li key='3'><a href="/">Phòng chống</a></li>
            <li key='4'><a href="/about-us" className={"/about-us"===window.location.pathname?"curr-page":""}>Về chúng tôi</a></li>
        </ul>
        <img src={bar} alt='bar' className='bar-icon' onClick={handleBar}/>
        <ul className={barClass}>
            <li key='1'><a href="/">Trang chủ</a></li>
            <li key='2'><a href="/News">Thông tin</a></li>
            <li key='3'><a href="/">Phòng chống</a></li>
            <li key='4'><a href="/about-us">Về chúng tôi</a></li>
        </ul>
    </div>
  );
}

export default Header;
