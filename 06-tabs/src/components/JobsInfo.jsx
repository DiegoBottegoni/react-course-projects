import Duties from "./Duties";

const JobsInfo = ({ jobs, currentItem }) => {
  const job = jobs[currentItem];
  return (
    <article className="job-info">
      <div>
        <h3 className="title">{job.title}</h3>
        <div className="title-underline"></div>
        <span className="job-company">{job.company}</span>
        <p className="job-date">{job.dates}</p>
        <Duties duties={job.duties} />
      </div>
    </article>
  );
};

export default JobsInfo;
