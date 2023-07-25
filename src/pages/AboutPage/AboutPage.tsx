import { Description } from '../../components/Descr/Descr';
import { Element } from 'react-scroll';

export const AboutPage = () => {
  return (
    <Element
      name="about"
      className="w-full h-screen dark:bg-[#0a192f] bg-slate-100 dark:text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Description></Description>
      </div>
    </Element>
  );
};
