import { Hero } from '../../components/Hero/Hero';
import { Waves } from '../../components/Waves/Waves';
import { Projects } from '../../components/Projects/Projects';
import { Quotation } from '../../components/Quotation/Quotation';
import { MoreAbout } from '../../components/MoreAbout/MoreAbout';
export const HomePage = () => {
  return (
    <>
      <Hero />
      <Waves />
      <Projects />
      <div>
        <Quotation />
        <MoreAbout />
      </div>
    </>
  );
};
