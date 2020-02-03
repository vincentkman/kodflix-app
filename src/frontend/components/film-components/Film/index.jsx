import React from 'react';
import { Link } from 'react-router-dom';
import './film.scss';

function Film({ id, title, img }) {
  return (
    <Link to={`/${id}`} className='item'>
      <img
        src={require(`../../../common/images/coverImages/${id}.jpg`)}
        alt={title}
        className='mainImg' />
      <div className="overlay">
        <h3 className='film-title'>{title}</h3>
      </div>
    </Link>
  );
}

export default Film;