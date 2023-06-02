import {memo} from 'react'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import '../../CSS/MainPage.css';
import NewsComponent from '../LittleComponent/NewsComponent';
import NewsData from '../../Data/NewsData';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination,Autoplay]);

function MainPage() {
  const DataArr = NewsData();
  const swiper = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <div className="main-page">
      <div className={activeIndex === 1 ? 'intro-img intro-img2' : 'intro-img'}></div>
      <Swiper
        ref={swiper}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000 }}
        direction='horizontal'
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className='intro-page'>
            <div className='intro-contentpane'>
              <h1>Bảo vệ rừng</h1>
              <p>Hãy bảo vệ rừng của chúng ta, đó là nguồn sống của tất cả chúng ta và là một phần quan trọng của hệ sinh thái trái đất.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='intro-page'>
            <div className='intro-contentpane'>
              <h1>Tầm quan trọng</h1>
              <p>Rừng là một phần quan trọng của hệ sinh thái trái đất. Chúng tạo ra môi trường sống cho nhiều loài động thực vật.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='prevention-page'>
        <div className='prevention-content-pane'>
          <div>
            <h1>Chung tay bảo vệ rừng</h1>
            <p>Đóng góp cho công cuộc bảo vệ rừng của chúng ta, đó là nguồn sống của tất cả chúng ta và là một phần quan trọng của hệ sinh thái trái đất.</p>

          </div>
          <Link to='/Report'>Báo cáo</Link>
        </div>
        <div className='image'></div>
      </div>
      <div className='news-page'>
        <h1 className='title'>Tin tức</h1>
        <div className='news-pane'>
          {DataArr.map((data) => {
            return (<NewsComponent key={data.id} data={data} />);
          })}
        </div>
        <Link className='more' to='/News'>Xem thêm</Link>
      </div>
      <div className='contact-page'>
        <div className='contact-content-pane'>
          <div>
            <h1>Chúng tôi là ai</h1>
            <p>Chúng tôi là một nhóm sinh viên đến từ VKU. Phát triển dự án FireWing với mục tiêu cung cấp thông tin và dự báo về cháy rừng sử dụng công nghệ AI.</p>

          </div>
          <Link to='/about-us'>Tìm hiểu thêm</Link>
        </div>
        <div className='image'></div>
      </div>
    </div>





  );
}

export default memo(MainPage);
