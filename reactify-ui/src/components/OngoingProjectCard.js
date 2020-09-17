import React from 'react';
import { Link } from 'react-router-dom';



const OngoingProjectCard = (props) => {
    return (
        <div className='card' >
            <h5 className='card__title' style={{ textAlign: 'center' }}>{props.name}</h5>
            <div className='card__header'>
                <img className='card__header__photo' src={props.image} alt='' />
            </div>
            <div className='row'>
                <div className='col-2-of-3'>
                    <p className='card__info'>Start Date: {props.start_date}</p>
                    <p className='card__info'>End Date: {props.end_date}</p>
                    <p className='card__info'>Duration: {props.duration}</p>
                </div>
                <div className='col-1-of-3'>
                    <p className='card__saletype'>{props.status}</p>
                    <p className='card__hometype'>{props.beneficiary_population}</p>
                </div>
            </div>
            <Link className='card__link' to={`/ongoingprojects/${props.id}`}>View Project</Link>

        </div>
    );
};



export default OngoingProjectCard;
