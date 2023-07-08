import { Slideshow } from '../Slideshow/Slideshow';
import Me from '../../assets/myphoto.jpg';
import { useSpring, animated } from '@react-spring/web';

export const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex-col content-center">
          <img src={Me} alt="me" width="120" />
          <p className="">Kateryna Dziubchuk</p>
          <h3>Frontend Developer</h3>
          <p>With passion in my heart</p>
        </div>
        <p>
          Welcome to my website, where you will see a story of success. From "Hello, World!" to apps
          with millions of users.
        </p>
      </div>
      <div>
        <Slideshow></Slideshow>
      </div>
    </div>
  );
};
