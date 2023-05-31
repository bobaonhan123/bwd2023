
import '../../CSS/MainPage.css';
import NewsComponent from '../LittleComponent/NewsComponent';
import NewsData from '../../Data/NewsData';
import { Link } from 'react-router-dom';

function MainPage() {
    const DataArr=NewsData();
    
  return (
    <div className="main-page">
        <div className='intro-img'></div>
        <div className='intro-page'>
          <div className='intro-contentpane'>
            <h1>Bảo vệ rừng</h1>
            <p>Hãy bảo vệ rừng của chúng ta, đó là nguồn sống của tất cả chúng ta và là một phần quan trọng của hệ sinh thái trái đất.</p>
          </div>
        </div>
        
        <div className='prevention-page'>
          <div className='prevention-content-pane'>
            <div>
              <h1>Chung tay bảo vệ rừng</h1>
              <p>Hãy đóng góp cho công cuộc bảo vệ rừng của chúng ta, đó là nguồn sống của tất cả chúng ta và là một phần quan trọng của hệ sinh thái trái đất.</p>
              
            </div>
            <Link to='/Report'>Báo cáo</Link>
          </div>
          <div className='image'></div>
        </div>
        <div className='news-page'>
          <h1 className='title'>Tin tức</h1>
          <div className='news-pane'>
            {DataArr.map((data)=>{
              return (<NewsComponent key={data.id} data={data}/>);
                          })}
          </div>
          <Link className='more' to='/News'>Xem thêm</Link>
        </div>
        <div className='contact-page'>
          
        </div>
    </div>
  );
}

export default MainPage;
