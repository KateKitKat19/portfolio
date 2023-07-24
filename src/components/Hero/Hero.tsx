import { BiRightArrowCircle } from 'react-icons/bi';

export const Hero = () => {
  return (
    <div className="w-full h-screen dark:bg-[#0a192f] bg-slate-100">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-3">
        <p className="dark:text-[#B9FAF8] text-sky-700 font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold dark:text-[#ccd6f6] text-[#22577A]">
          Kateryna Dziubchuk
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold dark:text-[#8892b0] text-[#38A3A5]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Welcome to my website, where you will see a story of success. From "Hello, World!" to apps
          with millions of users.
        </p>
        <div>
          <button className="text-white bg-[#38A3A5] dark:bg-sky-700 group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-sky-900 dark:hover:bg-cyan-900 rounded-md">
            View Works
            <BiRightArrowCircle className="ml-3 " />
          </button>
        </div>
      </div>
    </div>
  );
};
