import React, { useEffect }  from 'react';
import '../App.css';
import { Button } from './Button';
import AOS from "aos";
import 'aos/dist/aos.css'
import HeroSlider, {
  Slide,
  SideNav,
  Nav,
  OverlayContainer,
} from 'hero-slider'
import styled from "styled-components";
import './HeroSection.css';
import cyv1 from './background/cyv1.jpg';
import cyv2 from './background/cyv2.jpg';
import cyv3 from './background/cyv3.jpg';
import cyv4 from './background/cyv4.jpg';
import cyv5 from './background/cyv5.jpg';
import cyv6 from './background/cyv6.jpg';
import cyv7 from './background/cyv7.jpg';
import cyv8 from './background/cyv8.jpg';
import cyv9 from './background/cyv9.jpg';



function HeroSection() {
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  return (
    <div className='hero-container' data-aos="flip-up">
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="horizontal"
        initialSlide={1}
        style={{
          color: '#FFF',
        }}
        settings={{
          slidingDuration: 600,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 8000,
          height: '90vmin',
        }}
      >
        <OverlayContainer>
          <Wrapper>
            <h1>
              Vertical Slider
            </h1>
            <h2>
              Try switching to a display that supports touch, then swipe vertically
            </h2>
          </Wrapper>
        </OverlayContainer>

          <Slide
            background={{
              backgroundImage: cyv1
            }}
          >
            <Wrapper>
              <h2>
                CYVAT
              </h2>
            </Wrapper>
          </Slide>

          <Slide
            background={{
              backgroundImage: cyv2
            }}
          >
            <Wrapper>
              <h2>
                CYVAT
              </h2>
            </Wrapper>
          </Slide>

          <Slide
            background={{
              backgroundImage: cyv3
            }}
          >
            <Wrapper>
              <h2>
                CYVAT
              </h2>
            </Wrapper>
          </Slide>

          <Slide
            background={{
              backgroundImage: cyv4
            }}
          >
              <Wrapper>
                <h2>
                  CYVAT
                </h2>
              </Wrapper>
          </Slide>
      </HeroSlider>
      
    </div>
  );
}

export default HeroSection;


// Libraries


const Wrapper = styled.div`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    H2, H3 {
      margin: 0 36px;
    }
  }
`;

