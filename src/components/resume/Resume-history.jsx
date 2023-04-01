import "./resume.css";

export default function ResumeHistory({ name, resume }) {
  return (
    <>
      <h1 className="root__title-resume">{name}</h1>
      {resume.split(/\n/).map((paragraph) => (
        <p className="root__paragraph-resume">{paragraph}</p>
      ))}
      <div className="root__buttons">
        <button className="root__prev">Previous</button>
        <button className="root__next">Next</button>
      </div>
    </>
  );
}