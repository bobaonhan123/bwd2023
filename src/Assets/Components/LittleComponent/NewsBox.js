import '../../CSS/NewsBox.css';
import React from 'react';

function NewsBox(props) {
  const { title, description, URL } = props.data;

  return (
    <div className="news-item">
      <img src={URL} alt={title} />
      <div className="news-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsBox;