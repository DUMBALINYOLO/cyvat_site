import React, { useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import AOS from "aos";
import 'aos/dist/aos.css'

function Cards() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);
  

  return (
    <div className='cards' data-aos="flip-left">
      <div className = 'card'>
        <h1>CYVAT INTERVENTION AREAS</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items' >
              <CardItem
                src='images/catch2.jpg'
                text='IMPROVE INFRASTRUCTURE TO IMPROVE EDUCATION QUALITY'
                label='INFRASTRUCTURE DEVELOPMENT'
                data-aos="fade-right"
              />
              <CardItem
                src='images/fd11.jpg'
                text='WELL FED STUDENTS ARE LIKELY TO PUT MORE EFFORT TO THEIR STUDIES'
                label='NUTRITION'
                data-aos="fade-left"
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/advo8.jpg'
                text='A HUMAN IS NEVER FREE UNLESS THEY ARE COGNIZANT OF THEIR RIGHTS AND SPEAK FREELY ABOUT THEM'
                label='ADVOCACY'
                data-aos="fade-up"
              />
              <CardItem
                src='images/entry4.jpg'
                text='WE HELP ENTREPRENEURS'
                label='ENTREPRENEURSHIP'
                data-aos="fade-left"

              />
              <CardItem
                src='images/advo7.jpg'
                text='WE EMPOWER YOUNG PEOPLE'
                label='YOUTH EMPOWERMENT'
                data-aos="fade-right"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
