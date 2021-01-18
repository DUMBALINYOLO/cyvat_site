import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Grid from '@material-ui/core/Grid';
import ShowcaseCard from '../cards/ShowcaseCard';
import Title from './Title';
import styles from './landingStyle-jss';
import petal3 from '../../images/decoration/petal3.svg';
import petal4 from '../../images/decoration/petal4.svg';
import entry4 from './images/entry4.jpg';
import advo8 from './images/advo8.jpg';
import advo7 from './images/advo7.jpg';
import wash2 from './images/wash2.jpg';
import fd11 from './images/fd11.jpg';
import catch2 from './images/catch2.jpg';

function ParallaxDeco(props) {
  const { classes } = props;
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            offsetYMax={70}
            offsetYMin={-200}
            slowerScrollRate
            tag="figure"
          >
            <svg
              fill="#fff"
              className={
                classNames(
                  classes.parallaxVertical,
                  classes.parallaxPetal1
                )
              }
            >
              <use xlinkHref={petal3} />
            </svg>
          </Parallax>
          <Parallax
            offsetYMax={100}
            offsetYMin={-200}
            slowerScrollRate
            tag="figure"
          >
            <svg
              fill="#fff"
              className={
                classNames(
                  classes.parallaxVertical,
                  classes.parallaxPetal2
                )
              }
            >
              <use xlinkHref={petal4} />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

ParallaxDeco.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ParallaxDecoStyled = withStyles(styles)(ParallaxDeco);

class Showcase extends React.Component {
  render() {
    const { classes, slideMode, width } = this.props;
    return (
      <section className={classes.showcase}>
        {!slideMode && <ParallaxDecoStyled />}
        <div className={classes.container}>
          <Grid container className={classes.root} spacing={5}>
            <Grid item sm={6} md={4} xs={12}>
              <Title 
                title="Our PortFolio" 
                align={width === 'lg' ? 'left' : 'center'} 
                monocolor={slideMode && true} 
              />
              <ShowcaseCard
                title="INFRASTRUCTURE DEVELOPMENT"
                desc="WE HAVE DEVELOPED AND IMPROVE INFRASTRUCTURE IN UNDERDEVELOPED SCHOOLS"
                action="AT CYVAT"
                image={catch2}
              />
              <ShowcaseCard
                title="NUTRITION"
                desc="'WE HAVE FEDSCHOOL CHILDREN IN SCHOOLS AND DROUGHT STRICKEN COMMUNITIES"
                action="AT CYVAT"
                image={fd11}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <ShowcaseCard
                title="WASH"
                desc="WE HAVE PROVIDED WATER AND SANITATION TO COMMUNITIES"
                action="AT CYVAT"
                image={wash2}
              />
              <ShowcaseCard
                title="ADVOCACY"
                desc="WE HAVE CONSCIENTIZED COMMUNITIES ON THEIR HUMAN RIGHTS"
                action="AT CYVAT"
                image={advo7}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <div className={classes.lastShowcase}>
                <ShowcaseCard
                  title="ENTREPRENEURSHIP"
                  desc="WE HAVE INSTILLED AN ENTREPRENEURIAL MINDSET IN COMMUNITIES "
                  action="AT CYVAT"
                  image={entry4}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}


Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  slideMode: PropTypes.bool
};

Showcase.defaultProps = {
  slideMode: false
};


export default withWidth()(withStyles(styles)(Showcase));
