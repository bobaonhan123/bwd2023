import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const CarouselComponent = () => {
//     const members = [
//         {
//             id: 1,
//             name: 'Hoàng Tấn Phú Quốc',
//             studentId: '22IT239',
//             introduction:
//                 'Là công dân của thế ghệ mới, tôi yêu thích việc tạo ra những sản phẩm và ứng dụng có tác động tích cực trong cuộc sống hàng ngày. Mỗi ngày, tôi tiếp tục học hỏi và nâng cao kỹ năng lập trình để thách thức bản thân và đóng góp vào thế giới kỹ thuật số.',
//             github: 'https://github.com/phuquocchamp',
//             facebook: 'https://www.facebook.com/fbhoangtanphuquoc',
//             image: 'REACJS/bwd2023/src/Assets/Img/logo.svg',
//         },
//         {
//             id: 2,
//             name: 'Hồ Sỹ Bảo Nhân',
//             studentId: '22IT239',
//             introduction:
//                 'Là công dân của thế ghệ mới, tôi yêu thích việc tạo ra những sản phẩm và ứng dụng có tác động tích cực trong cuộc sống hàng ngày. Mỗi ngày, tôi tiếp tục học hỏi và nâng cao kỹ năng lập trình để thách thức bản thân và đóng góp vào thế giới kỹ thuật số.',
//             github: 'https://github.com/phuquocchamp',
//             facebook: 'https://www.facebook.com/fbhoangtanphuquoc',
//             image: '../Img/phuquocchamp.jpg',
//         },
//         {
//             id: 3,
//             name: 'Võ Thanh Phong',
//             studentId: '22IT239',
//             introduction:
//                 'Là công dân của thế ghệ mới, tôi yêu thích việc tạo ra những sản phẩm và ứng dụng có tác động tích cực trong cuộc sống hàng ngày. Mỗi ngày, tôi tiếp tục học hỏi và nâng cao kỹ năng lập trình để thách thức bản thân và đóng góp vào thế giới kỹ thuật số.',
//             github: 'https://github.com/phuquocchamp',
//             facebook: 'https://www.facebook.com/fbhoangtanphuquoc',
//             image: '../Img/phuquocchamp.jpg',
//         },
//         {
//             id: 4,
//             name: 'Nguyễn Phú Thịnh',
//             studentId: '22IT239',
//             introduction:
//                 'Là công dân của thế ghệ mới, tôi yêu thích việc tạo ra những sản phẩm và ứng dụng có tác động tích cực trong cuộc sống hàng ngày. Mỗi ngày, tôi tiếp tục học hỏi và nâng cao kỹ năng lập trình để thách thức bản thân và đóng góp vào thế giới kỹ thuật số.',
//             github: 'https://github.com/phuquocchamp',
//             facebook: 'https://www.facebook.com/fbhoangtanphuquoc',
//             image: '../Img/phuquocchamp.jpg',
//         },
//         // Add more member objects as needed
//     ];

//     return (
//         <Carousel>
//             {members.map((member) => (
//                 <div key={member.id} className="card">
//                     <img src={member.image} alt={member.name} />
//                     <h3>{member.name}</h3>
//                     <p>Mã sinh viên: {member.studentId}</p>
//                     <p>{member.introduction}</p>
//                     <div className="social-icons">
//                         <a href={member.github} target="_blank" rel="noopener noreferrer">
//                             <i className="fab fa-github"></i>
//                         </a>
//                         <a href={member.facebook} target="_blank" rel="noopener noreferrer">
//                             <i className="fab fa-facebook"></i>
//                         </a>
//                     </div>
//                 </div>
//             ))}
//         </Carousel>
//     );
// };

const CarouselComponent = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="../../Img/phuquocchamp.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;
