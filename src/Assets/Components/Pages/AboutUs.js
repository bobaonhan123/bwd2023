import '../../CSS/AboutUs.css';
import CarouselComponent from '../LittleComponent/CarouselComponent';

function AboutUs() {
    return (
        <div className="about-us">
            {/* Thông tin về Đề Tài */}
            <div className="container">
<<<<<<< HEAD
                <h1 className="container__title">
                    FireWing - Cung cấp thông tin, dự báo cháy rừng ứng dụng công nghệ AI
                </h1>
                <p className="container__description">
=======
                <h1 className="title">FireWing - Cung cấp thông tin, dự báo cháy rừng ứng dụng AI</h1>
                <p className="description">
>>>>>>> b1d20be113468a64c4370ca7398f4e352eb32948
                    FireWing là một trang web được phát triển bởi các sinh viên VKU với mục tiêu cung cấp thông tin và
                    dự báo về cháy rừng sử dụng công nghệ AI.
                </p>
                <p className="container__description">
                    FireWing giúp người dùng nắm bắt và cập nhật các thông tin về cháy rừng, bao gồm tình hình hiện tại,
                    dự báo, đánh giá nguy cơ. AI được sử dụng để phân tích và xử
                    lý dữ liệu, từ đó cung cấp thông tin chính xác và đáng tin cậy.
                </p>
<<<<<<< HEAD
                <p className="container__description">
                    Chúng tôi cam kết đem đến cho người dùng những thông tin hữu ích và giúp tăng cường nhận thức về
                    cháy rừng, từ đó đóng góp vào việc bảo vệ môi trường và sự an toàn cho cộng đồng.
=======
                <p className="description">
                    Chúng tôi đem đến cho mọi người những thông tin hữu ích và giúp tăng cường nhận thức về
                    cháy rừng, từ đó đóng góp vào việc bảo vệ rừng và sự an toàn cho cộng đồng.
>>>>>>> b1d20be113468a64c4370ca7398f4e352eb32948
                </p>
            </div>
            {/* Caroursel*/}
            <div className="cards">
                    <CarouselComponent />
                </div>
            {/*  */}
        </div>
    );
}

export default AboutUs;
