import React, { useState } from 'react';

const Tour = ({ id, title, body, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  const showMoreBtnText = readMore ? 'багыг' : 'илүүг';
  return (
    <article className='single-tour'>
      <img src="https://demo.cloudimg.io/v7/img.scaleflex.com/img.jpg?h=400" alt={title} />
      <footer>
        <div className='tour-info'>
          <h4>{title}</h4>
          <h4 className='tour-price'>2600₮</h4>
        </div>
        <p>{readMore ? body : `${body.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>{showMoreBtnText}</button>
        </p>
        <button onClick={() => removeTour(id)} className='delete-btn'>сонирхохгүй байна.</button>
      </footer>
    </article>
  );
};

export default Tour;
