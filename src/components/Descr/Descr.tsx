import Me from '../../assets/myphoto.jpg';
import { getTimePassed } from '../../helpers/calcTheData';

export const Description = () => {
  const timePassed = getTimePassed();

  console.log(timePassed);

  debugger;
  return (
    <div>
      <div className="waves">
        <img src={Me} alt="me" width="120" />
        <ul>
          <li>Kateryna</li>
          <li>Front-end developer</li>
          <li>
            {timePassed.years} year {timePassed.months} months {timePassed.days} days of coding
          </li>
        </ul>
      </div>
    </div>
  );
};
