import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Pagination from './Pagination';
import { newslettersURL } from '../constants';
import NewsletterCard from './NewsletterCard';
import AOS from "aos";
import 'aos/dist/aos.css';
import './Cards.css';


const Newsletters = () => {
    const [newsletters, setNewsLetters] = useState([]);
    const [count, setCount] = useState(0);
    const [previous, setPrevious] = useState('');
    const [next, setNext] = useState('');
    const [active, setActive] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const res = await axios.get(newslettersURL);

                setNewsLetters(res.data.results);
                setCount(res.data.count);
                setPrevious(res.data.previous);
                setNext(res.data.next);
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    useEffect(() =>{
        AOS.init({duration : 2000})

      }, []);


    const displayNewsLetters = () => {
        let display = [];
        let result = [];

        newsletters.map(newsletter => {
            return display.push(
                <NewsletterCard
                    name={newsletter.title}
                    image={newsletter.image}
                    start_date={newsletter.start_date}
                    id={newsletter.id}
                />
            );
        });

        for (let i = 0; i < newsletters.length; i += 3) {
            result.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {display[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+1] ? display[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+2] ? display[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    const visitPage = (page) => {
        axios.get(`newslettersURL?page=${page}`)
        .then(res => {
            setNewsLetters(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            setActive(page);
        })
        .catch(err => {

        });
    };

    const previous_number = () => {
        axios.get(previous)
        .then(res => {
            setNewsLetters(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (previous)
                setActive(active-1);
        })
        .catch(err => {

        });
    };

    const next_number = () => {
        axios.get(next)
        .then(res => {
            setNewsLetters(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (next)
                setActive(active+1);
        })
        .catch(err => {

        });
    };

    return (
        <main className='listings'>
            <div className='cards'>
                <Helmet>
                    <title>NewsLetters</title>
                    <meta
                        name='description'
                        content='NewsLetters page'
                    />
                </Helmet>
                <section className='listings__listings' data-aos="flip-up">
                    {displayNewsLetters()}
                </section>
                <section className='listings__pagination'>
                    <div className='row'>
                        <Pagination
                            itemsPerPage={3}
                            count={count}
                            visitPage={visitPage}
                            previous={previous_number}
                            next={next_number}
                            active={active}
                            setActive={setActive}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Newsletters;



