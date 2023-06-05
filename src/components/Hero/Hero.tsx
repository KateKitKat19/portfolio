import Galleria from '../../assets/phonebook.jpg';

export const Hero = () => {
  return (
    <div>
      <div>
        <h3>Frontend Developer</h3>
        <p>With passion in my heart</p>
        <p>
          Welcome to my website, where you`ll see the story of success. From "Hello, world!"
          to applications with millions of users.
        </p>
        <button type="button" aria-label="contact me">
          Contact me
        </button>
      </div>
      <div>
        <img src={Galleria} alt="" aria-label="my projects"></img>
      </div>
    </div>
  );
};
