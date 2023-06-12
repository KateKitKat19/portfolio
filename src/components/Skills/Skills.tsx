export const Skills = (props: any) => {
  const skillsArray: string[] = props.arr;
  return (
    <>
      <h3>Skills</h3>
      <ul>
        {skillsArray.map(skill => {
          return <li>{skill}</li>;
        })}
      </ul>
    </>
  );
};
