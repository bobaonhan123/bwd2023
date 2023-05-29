import '../../CSS/NewsComponent.css';
function NewsComponent({data}) {
  return (
    <div className="news-component">
      <a href={data.URL}>
       <img src={data.imageURL} alt=""/>
       <h2>{data.title}</h2>
       <div className='description'>{data.description}</div>
      </a>
    </div>
  );
}

export default NewsComponent;
