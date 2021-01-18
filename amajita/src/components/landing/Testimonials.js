import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Slider from 'react-animated-slider';
import './styles.css';
import Title from './Title';
import styles from './landingStyle-jss';
import lineside1 from '../../images/decoration/lineSide1.svg';
import lineside2 from '../../images/decoration/lineSide2.svg';
import anz from './images/anz.jpg';
import gift from './images/gift.jpg';
import isra from './images/isra.jpg';
import lin from './images/lin.jpg';
import min from './images/min.jpg';
import pyil from './images/pyil.jpg';

const content = [
  {
    title: 'Help Us Develop Our Communities',
    image: anz,
    user: '',
  },
  {
    title: 'Help Us Develop Our Communities',
    image: isra,
    user: '',
  },
  {
    title: 'Help Us Develop Our Communities',
    image: min,
    user: '',
  },
  {
    title: 'Help Us Develop Our Communities',
    image: lin,
    user: '',
  },
  {
    title: 'Help Us Develop Our Communities',
    image: pyil,
    user: '',
  },
  {
    title: 'Help Us Develop Our Communities',
    image: gift,
    user: '',
  },
  
];

function ParallaxDeco(props) {
  const { classes } = props;
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <Parallax
          offsetYMax={180}
          offsetYMin={-200}
          slowerScrollRate
          tag="figure"
        >
          <svg
            fill="#fff"
            className={
              classNames(
                classes.parallaxVertical,
                classes.parallaxLineSide1
              )
            }
          >
            <use xlinkHref={lineside1} />
          </svg>
        </Parallax>
        <Parallax
          offsetYMax={100}
          offsetYMin={-350}
          slowerScrollRate
          tag="figure"
        >
          <svg
            fill="#fff"
            className={
              classNames(
                classes.parallaxVertical,
                classes.parallaxLineSide2
              )
            }
          >
            <use xlinkHref={lineside2} />
          </svg>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

ParallaxDeco.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ParallaxDecoStyled = withStyles(styles)(ParallaxDeco);

class Testimonials extends React.Component {
  render() {
    const { classes, slideMode } = this.props;
    return (
      <div className={classes.testimonials}>
        {!slideMode && (<ParallaxDecoStyled />)}
        <div className={!slideMode ? classes.container : classes.fullSliderContent}>
          <Title title="OUR TEAM" align="center" monocolor={slideMode && true} />
          <div className={classes.sliderWrap}>
            <Slider className="slider-wrapper">
              {content.map((item, index) => (
                <div
                  key={index.toString()}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <IconButton aria-label="Play/pause" className={classes.playIcon}>
                    <PlayArrowIcon />
                  </IconButton>
                  <p className={classNames(classes.videoCaption, slideMode ? classes.mono : classes.color)}>
                    <Typography variant="h6" component="span" gutterBottom>{item.title}</Typography>
                    <Typography component="span">{item.user}</Typography>
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Testimonials.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Testimonials);
