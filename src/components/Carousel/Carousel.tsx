import { FC } from 'react';
import { Element } from 'react-scroll';
import { BsFillCircleFill } from 'react-icons/bs';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Galleria from '../../assets/projects/galleria2.jpg';
import Galleria1 from '../../assets/projects/galleria.jpg';
import Filmoteka from '../../assets/projects/filmoteka2.jpg';
import Filmoteka1 from '../../assets/projects/filmoteka.jpg';
import Icecream from '../../assets/projects/icecream2.jpg';
import Icecream1 from '../../assets/projects/icecream.jpg';
import Soyummy from '../../assets/projects/soyummy.jpg';
import Soyummy1 from '../../assets/projects/soyummy2.jpg';
import Splitter from '../../assets/projects/splitter.jpg';
import Usersearch from '../../assets/projects/usersearch.jpg';
import Imagefinder from '../../assets/projects/image-finder.png';
import Phonebook from '../../assets/projects/phonebook.png';

const slideImages = [
  {
    src: `${Galleria}`,
    caption: 'Galleria',
    url: 'https://katekitkat19.github.io/galleria-slideshow/',
  },
  {
    src: `${Galleria1}`,
    caption: 'Galleria',
    url: 'https://katekitkat19.github.io/galleria-slideshow/',
  },
  {
    src: `${Filmoteka}`,
    caption: 'Filmoteka',
    url: 'https://lefter011.github.io/command-project-filmoteka/',
  },
  {
    src: `${Filmoteka1}`,
    caption: 'Filmoteka',
    url: 'https://lefter011.github.io/command-project-filmoteka/',
  },
  {
    src: `${Icecream}`,
    caption: 'Icecream',
    url: 'https://katekitkat19.github.io/Ice-cream_project/',
  },
  {
    src: `${Icecream1}`,
    caption: 'Icecream',
    url: 'https://katekitkat19.github.io/Ice-cream_project/',
  },
  {
    src: `${Soyummy}`,
    caption: 'Soyummy',
    url: 'https://bondarviktoriia.github.io/so-yummy-front/',
  },
  {
    src: `${Soyummy1}`,
    caption: 'Soyummy',
    url: 'https://bondarviktoriia.github.io/so-yummy-front/',
  },
  { src: `${Splitter}`, caption: 'Splitter', url: 'https://katekitkat19.github.io/Tip-app/' },
  {
    src: `${Imagefinder}`,
    caption: 'Imagefinder',
    url: 'https://katekitkat19.github.io/goit-react-hw-04-images/',
  },
  {
    src: `${Usersearch}`,
    caption: 'Usersearch',
    url: 'https://katekitkat19.github.io/github-user-search-app/',
  },
  {
    src: `${Phonebook}`,
    caption: 'Phonebook',
    url: 'https://katekitkat19.github.io/goit-react-hw-08-phonebook/',
  },
];

export const CarouselComponent: FC = () => {
  return (
    <Element
      name="works"
      className="w-full h-screen pt-20 dark:bg-[#0a192f] bg-slate-100 dark:text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div className="text-[#22577A] dark:text-gray-300 mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-[#38A3A5] mb-4">Projects</p>
        </div>
        <Carousel
          autoPlay
          infiniteLoop
          useKeyboardArrows={true}
          onClickItem={event => console.log(event)}
          className="max-w-[1000px]"
        //   renderIndicator={(onClickHandler, isSelected, index, label) => {
        //     const defStyle = { padding: 15, cursor: 'pointer' };
        //     const style = isSelected ? { ...defStyle, fill: 'red' } : { ...defStyle };
        //       return (
        //         <span
        //           style={style}
        //           onClick={onClickHandler}
        //           onKeyDown={onClickHandler}
        //           key={index}
        //           role="button"
        //           tabIndex={0}
        //           aria-label={`${label} ${index + 1}`}
        //         >
        //           <BsFillCircleFill className='fill-sky-700'></BsFillCircleFill>
        //         </span>
        //       );
        //   }}
        >
          {slideImages.map((img, index) => (
            <div className="slide">
              <a
                className="w-full block"
                href={img.url}
                aria-label={img.caption}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img alt={img.caption} src={img.src} key={index} />
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </Element>
  );
};
