import React, { FC } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide, Fade } from 'react-slideshow-image';
import { Element } from 'react-scroll';
import { IconContext } from 'react-icons';

import { BsArrowRightCircle, BsArrowLeftSquare } from 'react-icons/bs';

import Galleria from '../../assets/galleria2.jpg';
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

const properties = {
  duration: 3000,
  autoplay: true,
  transitionDuration: 300,
  arrows: true,
  infinite: true,
  easing: 'ease',
  prevArrow: (
    <button type="button" aria-label="previous slide">
      <BsArrowLeftSquare />
    </button>
  ),
  nextArrow: (
    <button type="button" aria-label="next slide">
      <BsArrowRightCircle />
    </button>
  ),
};

export const Slideshow: FC = () => {
  return (
    <Element
      name="works"
      className="w-full border border-sky-800 flex flex-col justify-center items-center text-center dark:bg-[#0a192f] bg-slate-100"
    >
      <IconContext.Provider value={{ color: '#22577A', size: '2rem' }}>
        <div className="slide-container w-full mx-auto px-8 max-w-[1200px] border border-green-800">
          <Fade {...properties}>
            {slideImages.map((each, index) => (
              <div
                className="mx-auto border border-red-800 flex justify-center items-center"
                key={index}
              >
                <img
                  style={{
                    objectFit: 'contain',
                    height: 'auto',
                    maxWidth: '1000px',
                    width: '100%',
                  }}
                  src={each.src}
                  key={index}
                  alt="sample"
                />
              </div>
            ))}
          </Fade>
        </div>
      </IconContext.Provider>
    </Element>
  );
};
