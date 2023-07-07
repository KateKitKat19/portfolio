import { Description } from '../../components/Descr/Descr';
import skillsArr from '../../data/skills.json';
import softSkillsArr from '../../data/softskills.json';
import { Skills } from '../../components/Skills/Skills';
import { SoftSkills } from '../../components/SoftSkills/SoftSkills';
import { Bio } from '../../components/Bio/Bio';

const AboutPage = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold'>This is my About Page</h3>
      <Description></Description>
      <ul>
        <li>
          <Skills arr={skillsArr} />
        </li>
        <li>
          <SoftSkills arr={softSkillsArr} />
        </li>
        <li>
          <Bio></Bio>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
