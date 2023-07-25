import Me from '../../assets/myphoto.jpg';
import { getTimePassed } from '../../helpers/calcTheData';

export const Description = () => {
  const timePassed = getTimePassed();
  return (
    <div className="max-w-[1000px] w-full flex flex-col md:flex-row gap-8 justify-center items-center text-center text-xl text-[#22577A] dark:text-gray-300 px-3">
      <img src={Me} alt="me" width="320" className="rounded-md" />
      <div className="text-base md:text-lg text-right">
        <p className="sm:text-right text-xl lg:text-4xl font-bold mb-4"> A little bit about me.</p> I have been coding for{' '}
        {timePassed.years} {timePassed.years > 1 ? 'years' : 'year'}{' '}
        {timePassed.months > 0 && `${timePassed.months} months`}{' '}
        {timePassed.days > 0 && `${timePassed.days} days`}, and my GitHub profile is a
        testament to my dedication and progress. Through constant coding practice, I am honing my
        skills and expanding my knowledge of different programming languages and frameworks. My
        previous experience in customer support has provided me with flexibility and stress
        tolerance, as well as some creativity in solving everyday problems. I am eager to join a
        friendly community of passionate professionals and learn from them. I believe that lifelong
        learning is the key to success.
      </div>
    </div>
  );
};
