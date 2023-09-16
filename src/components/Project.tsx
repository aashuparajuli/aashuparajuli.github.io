interface ProjectParams {
  title: string;
  description: string[];
}
interface SingleProject {
  project: ProjectParams;
}
function Project(props: SingleProject) {
  return (
    <>
      <div className="project">
        <h3>{props.project.title}</h3>
        <ul>
          {props.project.description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Project;
