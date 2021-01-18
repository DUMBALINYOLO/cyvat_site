import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './profile-jss';
import catch1 from './background/catch1.jpg';
import cyv5 from './background/cyv5.jpg';
import cyv4 from './background/cyv4.jpg';
import cyv6 from './background/cyv6.jpg';
import cyv7 from './background/cyv7.jpg';
import cyv8 from './background/cyv8.jpg';
import cyv9 from './background/cyv9.jpg';
import ed9 from './background/ed9.jpg';
import entr1 from './background/entr1.jpg';
import entr11 from './background/entr11.jpg';
import entr12 from './background/entr12.jpg';
import fd10 from './background/fd10.jpg';
import fd6 from './background/fd6.jpg';
import h1 from './background/h1.jpg';
import h2 from './background/h2.jpg';
import h3 from './background/h3.jpg';
import h5 from './background/h5.jpg';
import h6 from './background/h6.jpg';
import h7 from './background/h7.jpg';
import h8 from './background/h8.jpg';
import rec7 from './background/rec7.jpg';
import rec8 from './background/rec8.jpg';
import rec9 from './background/rec9.jpg';
import wash from './background/wash.jpg';
import wash2 from './background/wash2.jpg';
import hr1 from './background/hr1.jpeg';
import hr2 from './background/hr2.jpeg';
import hr5 from './background/hr5.jpeg';
import hr6 from './background/hr6.jpeg';
import hr7 from './background/hr7.jpeg';
import hr8 from './background/hr8.jpeg';
import hr9 from './background/hr9.jpeg';
import hr10 from './background/hr10.jpeg';
import hr11 from './background/hr11.jpeg';
import hr12 from './background/hr12.jpeg';
import hr15 from './background/hr15.jpeg';

const PHOTOS = [
  {
    photo: hr1,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr15,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr12,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr11,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr10,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr9,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr8,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr7,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr6,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr5,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr2,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: hr1,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: catch1,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: cyv4,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: cyv5,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: cyv6,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: catch1,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: cyv7,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: cyv8,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: cyv9,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: ed9,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: entr1,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: entr11,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: entr12,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: fd10,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: fd6,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: h1,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: h2,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: h3,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: h5,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: h6,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: h7,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: h8,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: rec7,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: rec8,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: rec9,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: wash,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: wash2,
    caption: "changing communities for the better",
    subcaption: "cyvat at work",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
];

function Albums(props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="contained" color="primary" disableElevation>
        Open gallery
      </Button>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

Albums.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Albums);
