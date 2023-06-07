import Me from '../../assets/myphoto.jpg';

export const MoreAbout = () => {
  return (
    <div>
      <img src={Me} alt="me" width='120'/>
      <div>
        <p>More about me</p>
        <p>Click the button below to read more</p>
        <button type="button" aria-label="read more">
          About me
        </button>
      </div>
    </div>
  );
};
