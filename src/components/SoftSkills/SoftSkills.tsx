export const SoftSkills = (props: any) => {
  const skillsArray: string[] = props.arr;
  return (
    <>
      <h3>Soft Skills</h3>
      <ul>
        {skillsArray.map(skill => {
          return <li>{skill}</li>;
        })}
      </ul>
    </>
  );
};
