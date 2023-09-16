import "./Job";
import "./Page.css";
import Job from "./Job";
import jobs from "../assets/jobs.json";
import Project from "./Project";
import projects from "../assets/projects.json";
function Page() {
  function hide_all_sections(sectionId: string) {
    document
      .querySelectorAll("section")
      .forEach((item) => (item.style.display = "none"));
    //const sectionId: string = "workExperience";
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow;
      sectionToShow.style.display = "block";
    }
  }
  function show_all_sections() {
    document
      .querySelectorAll("section")
      .forEach((item) => (item.style.display = "block"));
  }
  //show the selected page
  return (
    <>
      <nav>
        <ul>
          {/* <button onClick={hide_all_sections}></button> */}
          <li id="home" onClick={show_all_sections}>
            <a>Home</a>
          </li>
          <li
            id="workExperienceHeader"
            onClick={() => hide_all_sections("workExperience")}
          >
            <a>Work Experience</a>
          </li>
          <li id="projHeader" onClick={() => hide_all_sections("projects")}>
            <a>Projects</a>
          </li>
          <li id="contactHeader" onClick={() => hide_all_sections("contactMe")}>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <h1>Aashu Parajuli</h1>

      <section id="workExperience">
        <h2>Work Experience</h2>
        {jobs.map((job) => (
          <Job job={job} />
        ))}
      </section>
      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </section>
      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>AWS Cloud Practitioner</li>
        </ul>
      </section>
      <section id="contactMe">
        <h2>Contact Me</h2>
        <ul>
          <li>
            Linkedin:
            <a href="https://www.linkedin.com/in/aashuparajuli">
              linkedin.com/in/aashuparajuli
            </a>
          </li>
          <li>
            Github:
            <a href="https://www.github.com/aashuparajuli">
              github.com/aashuparajuli
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Page;
