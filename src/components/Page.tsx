import "./Job";
import Job from "./Job";
import jobs from "../assets/jobs.json";
function Page() {
  return (
    <>
      <h1>Aashu Parajuli</h1>

      <div className="workExperience">
        <h1>Work Experience</h1>
        <Job job={jobs[0]}></Job>
        <Job job={jobs[1]}></Job>
        <Job job={jobs[2]}></Job>
      </div>
      <div className="contactMe">
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
      </div>
    </>
  );
}

export default Page;
