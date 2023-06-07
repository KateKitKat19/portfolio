//icons
import { RiMovie2Line } from 'react-icons/ri';
import { RiLayoutMasonryLine } from 'react-icons/ri';
import { DiSass } from 'react-icons/di';

import { TbApi } from 'react-icons/tb';
import { SiStyledcomponents } from 'react-icons/si';
import { SiAxios } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

export const Projects = () => {
  return (
    <div>
      <h2>Selected projects</h2>
      <p>
        Visit my{' '}
        <a
          href="https://github.com/KateKitKat19"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github link"
        >
          GitHub
        </a>{' '}
        to see more
      </p>
      <ul>
        <li>
          <h3>Galleria</h3>
          <p>Art gallery slideshow project</p>
          <ul>
            <li>
              React.js <SiReact />
            </li>
            <li>
              JavaScript <SiJavascript />
            </li>
            <li>
              Styled Components
              <SiStyledcomponents />
            </li>
            <li>
              Masonry Layout <RiLayoutMasonryLine />
            </li>
            <li>
              HTML5 <SiHtml5 />
            </li>
          </ul>
          <button type="button" aria-label="check the project">
            Check out
          </button>
        </li>
        <li>
          <h3>So Yummy</h3>
          <p>React-based cooking app, designed for anyone who loves to cook </p>
          <ul>
            <li>
              React.js <SiReact />
            </li>
            <li>
              Axios <SiAxios />
            </li>
            <li>
              Node.js <SiNodedotjs />
            </li>
            <li>
              Redux Toolkit <SiRedux />
            </li>
            <li>
              MongoDB <SiMongodb />
            </li>
            <li>
              Styled Components <SiStyledcomponents />
            </li>
            <li>
              HTML5 <SiHtml5 />
            </li>
          </ul>
          <button type="button" aria-label="check the project">
            Check out
          </button>
        </li>
        <li>
          <h3>Filmoteka</h3>
          <p>
            Movie search <RiMovie2Line /> website
          </p>
          <ul>
            <li>
              JavaScript <SiJavascript />
            </li>
            <li>
              {' '}
              Axios <SiAxios />
            </li>
            <li>
              SASS <DiSass />
            </li>
            <li>
              RESTful API <TbApi />
            </li>
            <li>
              Node.js <SiNodedotjs />
            </li>
            <li>
              HTML5 <SiHtml5 />
            </li>
          </ul>
          <button type="button" aria-label="check the project">
            Check out
          </button>
        </li>
      </ul>
    </div>
  );
};
