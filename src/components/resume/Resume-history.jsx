import "./resume.css";
import Buttons from "../buttons/Buttons";
export default function ResumeHistory({ name, resume, onPrev, onNext }) {
  return (
    <>
      <h1 className="root__title-resume">{name}</h1>
      {resume.split(/\n/).map((paragraph, index) => (
        <p key={index} className="root__paragraph-resume">
          {paragraph}
        </p>
      ))}
      <Buttons one={"Previous"} two={"Next"} onPrev={onPrev} onClick={onNext} />
    </>
  );
}
