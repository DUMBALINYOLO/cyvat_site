import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';

import './Cards.css';

const Newsletter = (props) => {
    const [newsletter, setNewsLetter] = useState({});
    useEffect(() => {
        const id = props.match.params.id;


        axios.get(`http://127.0.0.1:8000/api/pages/newsletters/${id}`)
        .then(res => {
            setNewsLetter(res.data);
            
        })
        .catch(err => {

        });
    }, [props.match.params.id]);

    const displayInteriorImages = () => {
        let images = [];

        images.push(
            <div key={1} className='row'>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_1 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_1} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_2 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_2} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_3 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_3} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={2} className='row'>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_4 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_4} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_5 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_5} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_6 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_6} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={3} className='row'>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_7 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_7} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_8 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_8} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        newsletter.image_9 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={newsletter.image_9} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        ); 

        return images;
    };

    
    

    return (
        <div className='cards'>
            <div className='listingdetail'>
                <Helmet>
                    <title>NewsLetter | {`${newsletter.title}`}</title>
                    <meta
                        name='description'
                        content='NewsLetter detail'
                    />
                </Helmet>
                <div className='listingdetail__header'>
                    <h1 className='listingdetail__title'>{newsletter.title}</h1>
                    <p className='listingdetail__location'>{newsletter.published_date}</p>
                </div>
                <div className='row'>
                    <div className='listingdetail__breadcrumb'>
                        <Link className='listingdetail__breadcrumb__link' to='/'>Home</Link> / {newsletter.title}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <div className='listingdetail__display'>
                            <img className='listingdetail__display__image' src={newsletter.image} alt='' />
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <Card >

                    </Card>
                </div>
                <h1 style={{paddingTop: '20px', paddingBottom: '20px' }}>CONTENT</h1>
                <div className='row'>
                    <p className='listingdetail__description'>{newsletter.description}</p>
                </div>
                {displayInteriorImages()}
            </div>
        </div>
    );
};

export default Newsletter;





