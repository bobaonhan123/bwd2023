import { useState } from "react";
import logo from '../Img/logo.svg';
import bar from '../Img/bars-solid.svg'
import '../CSS/Header.css';

function Header() {
    const [mobileNavStyle,setMobileNavStyle]=useState({top:'100px'});
    const [HeaderClass,setHeaderClass]=useState("Header");
    let handleScroll=()=> {
        if(window.pageYOffset>1) {
            setHeaderClass("Header white-header");
            setMobileNavStyle({top:'70px'});
        }
        else {
            setHeaderClass("Header");
            setMobileNavStyle({top:'100px'});
        }
        
    }
    window.onscroll=handleScroll;

    var [barClass,setBarClass]=useState('mobile-nav');
    let handleBar=()=> {
        if(barClass==='mobile-nav') {
            setBarClass('mobile-nav active-nav');
        }
        else setBarClass('mobile-nav');
    }

    window.addEventListener("resize", ()=>{
        if(window.innerWidth>600) {
            setBarClass('mobile-nav');
        }
    });


    
  return (
    <div className={HeaderClass}>
        <a href="/"><img src={logo} alt='logo'/></a>
        <ul className="navbar">
            <li key='1'><a href="/" className={"/"===window.location.pathname?"curr-page":""}>Trang chủ</a></li>
            <li key='2'><a href="/News" className={"/News"===window.location.pathname?"curr-page":""}>Thông tin</a></li>
            <li key='3'><a href="/Prevention" className={"/Prevention"===window.location.pathname?"curr-page":""}>Phòng chống</a></li>
            <li key='4'><a href="/about-us" className={"/about-us"===window.location.pathname?"curr-page":""}>Về chúng tôi</a></li>
        </ul>
        <img src={bar} alt='bar' className='bar-icon' onClick={handleBar}/>
        <ul className={barClass} style={mobileNavStyle}>
            <li key='1'><a href="/" className={"/"===window.location.pathname?"curr-page":""}>Trang chủ</a></li>
            <li key='2'><a href="/News" className={"/News"===window.location.pathname?"curr-page":""}>Thông tin</a></li>
            <li key='3'><a href="/Prevention" className={"/Prevention"===window.location.pathname?"curr-page":""}>Phòng chống</a></li>
            <li key='4'><a href="/about-us" className={"/about-us"===window.location.pathname?"curr-page":""}>Về chúng tôi</a></li>
        </ul>
    </div>
  );
}

export default Header;
