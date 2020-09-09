import React, { useEffect } from 'react';
import './Footer.css';
import { Button } from './Button';
import AOS from "aos";
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';


function Footer() {
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);
  return (
    <footer>
      <div className="footer-container" data-aos="fade-right">
        <div className="left-col">
          <div className="social-media">
            <a href="#"><i className="pi pi-facebook"></i></a>
            <a href="#"><i className="pi pi-twitter"></i></a>
            <a href="#"><i className="pi pi-google"></i></a>
          </div>
          <p className="rights-text">© 2020 Christian Youth Volunteer Trust(CYVAT)</p>
        </div>

        <div className="right-col">
          <Link to="/newletters">
            <h1>Our Newsletter</h1>
          </Link>
          <div className="border"></div>
          <p>Enter Your Email to get our news and updates..</p>
          <form action="" className="newsletter-form">
            <input type="text" className="txtb" placeholder="Enter Your Email"/>
            <input type="submit" className="btn" value="submit"/>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
