import React from 'react';
import { Link } from 'react-router-dom';

function InfoContent({ film: { id, title, synopsis } }) {
    const url = require(`../../../common/images/coverImages/${id}.jpg`);
    return (
        <div className='info'>
            <h1>{title}</h1>
            <div className='content'>
                <div className='textbox'>
                    <p className='text'>
                        {synopsis}
                    </p>
                </div>
                <img
                    src={url}
                    alt={title}
                    className='info-image'
                />
            </div>
            <div className='button'>
                <Link to='/' className='home-button'>Home page</Link>
            </div>
        </div>
    )
}

export default InfoContent;