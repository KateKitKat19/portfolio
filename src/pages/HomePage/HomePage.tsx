import { Hero } from '../../components/Hero/Hero';
import { Projects } from '../../components/Projects/Projects';
import { Quotation } from '../../components/Quotation/Quotation';
import { MoreAbout } from '../../components/MoreAbout/MoreAbout';
import { Header } from '../../components/Header/Header';
import { FC } from 'react';
import { Element } from 'react-scroll';

export const HomePage: FC = () => {
  return (
    <Element
      name="home"
      className="w-full dark:bg-[#0a192f] bg-slate-100 mx-auto px-8 flex flex-col items-center"
    >
      <Header></Header>
      <Hero />
      {/* <Projects />
      <div>
        <Quotation />
        <MoreAbout />
      </div> */}
    </Element>
  );
};
