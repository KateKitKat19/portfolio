import { Hero } from '../../components/Hero/Hero';
import { Projects } from '../../components/Projects/Projects';
import { Quotation } from '../../components/Quotation/Quotation';
import { MoreAbout } from '../../components/MoreAbout/MoreAbout';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      {/* <Projects />
      <div>
        <Quotation />
        <MoreAbout />
      </div> */}
    </>
  );
};

export default HomePage;
