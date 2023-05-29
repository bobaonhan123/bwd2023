
import '../../CSS/MainPage.css';
import NewsComponent from '../LittleComponent/NewsComponent';
import NewsData from '../../Data/NewsData';

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
          
        </div>
        <div className='news-page'>
          <h1 className='title'>Tin tức</h1>
          <div className='news-pane'>
            {DataArr.map((data)=>{
              return (<NewsComponent data={data}/>);
                          })}
          </div>
          <a className='more' href='/News'>Xem thêm</a>
        </div>
        <div className='contact-page'>
          
        </div>
    </div>
  );
}

export default MainPage;
