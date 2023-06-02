import React from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import '../../CSS/CarouselSwiper.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CarouselSwiper = () => {
    const members = [
        {
            id: 1,
            name: 'Hoàng Tấn Phú Quốc',
            studentId: '22IT239',
            introduction: 'Em yêu VKU VCL',
            facebook: 'https://www.facebook.com/fbhoangtanphuquoc',
            github: 'https://github.com/phuquocchamp',
            avatar: 'external/phuquocchamp.jpg',
        },
        {
            id: 2,
            name: 'Võ Thanh Phong',
            studentId: '22IT222',
            introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            facebook: 'https://www.facebook.com/JustA707',
            github: 'https://github.com/JustAG7',
            avatar: 'external/phuquocchamp.jpg',
        },
        {
            id: 3,
            name: 'Hồ Sỹ Bảo Nhân',
            studentId: '22IT198',
            introduction: 'Tôi luôn tin rằng việc bảo vệ rừng không chỉ giúp bảo tồn môi trường mà còn bảo vệ sự sống và tương lai của chính chúng ta.',
            facebook: 'https://www.facebook.com/hosybaonhan',
            github: 'https://github.com/bobaonhan123',
            avatar: 'external/Bit0.jpg',
        },
        {
            id: 4,
            name: 'Nguyễn Phú Thịnh',
            studentId: '22IT280',
            introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            facebook: 'https://www.facebook.com/ting12q',
            github: 'https://github.com/vkutin12q',
            avatar: 'external/phuquocchamp.jpg',
        },
        // Thêm các thành viên khác vào đây
    ];

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className="carousel__container"
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            autoplay={{ delay: 2500 }} // Tự động chuyển slide sau 3 giây
            loop
        >
            {members.map((member) => (
                <SwiperSlide key={member.id}>
                    <div className="carousel__slide">
                        <div className="avatar">
                            <img src={member.avatar} alt="Avatar" />
                        </div>
                        <div className="member__info">
                            <h3 className="member__name">{member.name}</h3>
                            <p>Mã sinh viên: {member.studentId}</p>
                            <p>{member.introduction}</p>
                            <div className="social__icons">
                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselSwiper;
