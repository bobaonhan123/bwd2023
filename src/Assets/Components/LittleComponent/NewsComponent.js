import '../../CSS/NewsComponent.css';
function NewsComponent({data,Width}) {
  return (
    <div className="news-component" style={{width:Width}}>
      <a href={data.URL}>
       <img src={data.imageURL} alt=""/>
       <h2>{data.title}</h2>
       <div className='description'>{data.description}</div>
      </a>
    </div>
  );
}

export default NewsComponent;
