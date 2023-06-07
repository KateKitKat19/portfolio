import { Slideshow } from '../Slideshow/Slideshow';

export const Hero = () => {
  return (
    <div>
      <div>
        <h3>Frontend Developer</h3>
        <p>With passion in my heart</p>
        <p>
          Welcome to my website, where you will see a success story. From "Hello, World!" to apps
          with millions of users.
        </p>
        <button type="button" aria-label="contact me">
          Contact me
        </button>
      </div>
      <div>
        <Slideshow></Slideshow>
      </div>
    </div>
  );
};
