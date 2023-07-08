import React, { FC } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

import Galleria from '../../assets/phonebook.jpg';
import Filmoteka from '../../assets/filmoteka2.jpg';
import Icecream from '../../assets/icecream2.jpg';
import Soyummy from '../../assets/soyummy.jpg';
import Splitter from '../../assets/splitter.jpg';
import Usersearch from '../../assets/usersearch.jpg';

const slideImages = [
  { src: `${Galleria}`, caption: 'Galleria' },
  { src: `${Filmoteka}`, caption: 'Filmoteka' },
  { src: `${Icecream}`, caption: 'Icecream' },
  { src: `${Soyummy}`, caption: 'Soyummy' },
  { src: `${Splitter}`, caption: 'Splitter' },
  { src: `${Usersearch}`, caption: 'Usersearch' },
];

// ADJUST BUTTONS!!~~!!
const buttonStyle = {
  width: '30px',
  background: 'none',
  border: '0px',
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

export const Slideshow: FC = () => {
  return (
    <div className="slide-container">
      <Fade {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className=" flex content-center justify-center bg-cover w-9/12 h-auto" style={{ backgroundImage: `url(${slideImage.src})` }}></div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
