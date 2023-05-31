
import logo from '../Img/logo.svg';
import fblogo from '../Img/facebook-f.svg'
import githublogo from '../Img/github.svg'
import '../CSS/Footer.css';

function Footer() {
  let dataArr = [
    {
      id:'1',
      name:'Bit0',
      facebook:'https://www.facebook.com/hosybaonhan',
      github:'https://github.com/bobaonhan123'
    },
    {
      id:'2',
      name:'JustA',
      facebook:'https://www.facebook.com/JustA707',
      github:'https://github.com/JustAG7'
    },
    {
      id:'3',
      name:'pthinh',
      facebook:'https://www.facebook.com/ting12q',
      github:'https://github.com/vkutin12q'
    },
    {
      id:'4',
      name:'phuquocchamp',
      facebook:'https://www.facebook.com/fbhoangtanphuquoc',
      github:'https://github.com/phuquocchamp'
    }
  ];
  return (
    <div className='Footer'>
        <img src={logo} alt='logo'/>
        <ul>
            {dataArr.map((data)=>{
              return (
              <li key={data.id}>
                <div className='personal-component'>
                  <p>{data.name}</p>
                  <div className='logo-list'>
                    <a href={data.facebook}><img src={fblogo} alt='fblogo'/></a>
                    <a href={data.github}><img src={ githublogo} alt='github'/></a>
                  </div>
                </div>
              </li>
              );
            })}
        </ul>
        <p>Copyright © 2023 - Vietnam-Korea University of Information and Communication Technology - The University of Danang</p>
    </div>
  );
}

export default Footer;
