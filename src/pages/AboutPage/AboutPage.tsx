import { Description } from '../../components/Descr/Descr';
import skillsArr from '../../data/skills.json';
import { Skills } from '../../components/Skills/Skills';

export const AboutPage = () => {
  console.log('skillsArr: ', skillsArr);
  return (
    <div>
      <h3>This is my About Page</h3>
      <Description></Description>
      <ul>
        <li>
          <Skills arr={skillsArr} />
        </li>
      </ul>
    </div>
  );
};
