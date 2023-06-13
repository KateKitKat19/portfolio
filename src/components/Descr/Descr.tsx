import Me from '../../assets/myphoto.jpg';
import { getTimePassed } from '../../helpers/calcTheData';

export const Description = () => {
  const timePassed = getTimePassed();
  return (
    <div>
      <div className="waves">
        <img src={Me} alt="me" width="120" />
        <ul>
          <li>Kateryna</li>
          <li>Front-end developer</li>
          <li>
            {timePassed.years} {timePassed.years > 1 ? 'years' : 'year'}{' '}
            {timePassed.months > 0 && `${timePassed.months} months`}
            {timePassed.days > 0 && `${timePassed.days} days`} of coding
          </li>
        </ul>
      </div>
    </div>
  );
};
