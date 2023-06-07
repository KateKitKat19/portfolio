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
        </a>
        to see more
      </p>
      <ul>
        <li>
          <h3>Galleria</h3>
          <p>Art gallery slideshow project</p>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Styled Components</li>
            <li>Masonry Layout</li>
          </ul>
          <button type="button" aria-label="check the project">
            Check out
          </button>
        </li>
        <li>
          <h3>So Yummy</h3>
          <p>React-based cooking app, designed for anyone who loves to cook </p>
          <ul>
            <li>React.js</li>
            <li>Axios</li>
            <li>Node.js</li>
            <li>Redux Toolkit</li>
            <li>MongoDB</li>
            <li>Styled Components</li>
          </ul>
          <button type="button" aria-label="check the project">
            Check out
          </button>
        </li>
        <li>
          <h3>Filmoteka</h3>
          <p>Movie search 🎥 website </p>
          <ul>
            <li>JavaScript</li>
            <li>Axios</li>
            <li>SASS</li>
            <li>RESTful API</li>
          </ul>
          <button type="button" aria-label="check the project">
            Check out
          </button>
        </li>
      </ul>
    </div>
  );
};
