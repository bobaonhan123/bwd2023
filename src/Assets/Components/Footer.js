import '../CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitSquare, faFacebookSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Project Informartion */}
                <div className="project__info">
                    <h3>FireWing</h3>
                    <p>
                        FireWing là một trang web được phát triển bởi các sinh viên VKU với mục tiêu cung cấp thông tin
                        và dự báo về cháy rừng sử dụng công nghệ AI.
                    </p>
                    <div class="social">
                        <FontAwesomeIcon icon={faGitSquare} />
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                </div>
                {/* Related Information */}
                <div className="related__info">
                    <h3>Related Information</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </div>
                <div className="related__info">
                    <h3 className='heading'>Information</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </div>
                {/* Feedback Form */}
                <div className="feedback__section">
                    <h3 className='heading'>Newsletter</h3>
                    <div>
                        <input type="email" placeholder="Your email id here" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <p className="footer__copyright">
                Copyright © 2023 - Vietnam-Korea University of Information and Communication Technology - The University
                of Danang
            </p>
        </footer>
    );
}

export default Footer;
