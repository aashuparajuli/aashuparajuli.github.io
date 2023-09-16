import { useState } from "react";
import "./App.css";
import "./Job";
import Job from "./Job";
function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="workExperience">
        <div className="job">
          <h3>iOS Developer | Jan 2023 - May 2023</h3>
          <ul>
            <li>Designed a machine learning application</li>
          </ul>
        </div>
        <h2>Work Experience</h2>

        <div className="job">
          <h3>Sofware Development Engineer Intern | May 2022 - August 2022</h3>
          <ul>
            <li>Improved the efficiency of a manual process</li>
            <li>Used Typescript, and Jest to test my application</li>
          </ul>
        </div>
        <div className="job">
          <h3>
            Undergraduate Research Assistant | August 2021 - December 2021
          </h3>
          <ul>
            <li>Performed Python automation research</li>
          </ul>
        </div>
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
