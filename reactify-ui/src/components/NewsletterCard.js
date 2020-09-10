import React from 'react';
import { Link } from 'react-router-dom'



const NewsletterCard = (props) => {
    return (
        <div className='card' >
            <h3 className='card__title'>{props.title}</h3>
            <div className='card__header'>
                <img className='card__header__photo' style ={{width: '300px', height: '200px'}} src={props.image} alt='' />
            </div>

            <div className='row'>
                <div className='col-2-of-3'>
                    <p className='card__info'>Date: {props.published_date}</p>
                </div>
                <div className='col-1-of-3'>
                    <p className='card__hometype'>PUBLISHED</p>
                </div>
            </div>
            <Link className='card__link' to={`/newsletters/${props.id}`}>View NewsLetter</Link>

        </div>
    );
};



export default NewsletterCard;




