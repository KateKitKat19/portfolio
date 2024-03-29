import HTML from '../../assets/tech-icons/html.png';
import CSS from '../../assets/tech-icons/css.png';
import JavaScript from '../../assets/tech-icons/javascript.png';
import TypeScript from '../../assets/tech-icons/typescript.png';
import ReactImg from '../../assets/tech-icons/react.png';
import Node from '../../assets/tech-icons/node.png';
import Git from '../../assets/tech-icons/git.png';
import Tailwind from '../../assets/tech-icons/tailwind.png';
import Mongo from '../../assets/tech-icons/mongo.png';
import Redux from '../../assets/tech-icons/redux.png';
import Sass from '../../assets/tech-icons/sass.png';
import StyledComponents from '../../assets/tech-icons/styled-components.png';
import { Element } from 'react-scroll';

export const Skills = () => {
  return (
    <Element
      name="skills"
      className="w-full h-full sm:h-screen pt-20 dark:bg-[#0a192f] bg-slate-100 dark:text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="text-[#22577A] dark:text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-[#38A3A5] mb-2">Skills</p>
          <p className="py-4 text-xl "> These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">HTML</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">CSS</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={Sass} alt="Sass icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">SASS</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={StyledComponents} alt="Styled Components icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">STYLED COMPONENTS</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">TAILWIND</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">JAVASCRIPT</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={TypeScript} alt="TypeScript icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">TYPESCRIPT</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">REACT</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={Redux} alt="Redux icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">REDUX</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">GIT</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">NODE JS</p>
          </div>
          <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500 py-4 flex flex-col justify-center items-center rounded-md">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4 font-bold text-[#22577A] dark:text-gray-300">MONGO DB</p>
          </div>
        </div>
      </div>
    </Element>
  );
};
