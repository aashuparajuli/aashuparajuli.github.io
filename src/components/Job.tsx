interface JobParams {
  title: string;
  company: string;
  location: string;
  description: string[];
  startDate: string;
  endDate: string;
}
interface SingleJob {
  job: JobParams;
}
function Job(props: SingleJob) {
  return (
    <>
      <div className="job">
        <h2>
          {props.job.title} | {props.job.startDate} - {props.job.endDate}
        </h2>
        <h3>{props.job.company}</h3>
        <ul>
          {props.job.description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Job;
