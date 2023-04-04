import { useState, useRef } from "react";
import "./question.css";
export default function Question({ questions }) {
  const [next, setNext] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const trueRef = useRef(0);
  let question = questions[next];
  function handleClickNext() {
    setIsNext(!isNext);
    if (next === questions.length - 1) {
      setNext(0);
    } else {
      setNext(next + 1);
    }
  }
  function handleClickSee(num) {
    trueRef.current = trueRef.current + num;
  }
  return (
    <section className="root__questions" key={question.id}>
      <h2 className="root__question">{question.question}</h2>
      <section className="root__answer">
        {question.answer.map((inp, index) => (
          <label htmlFor={inp} key={index} className="root__label">
            <input
              id={inp}
              value={inp}
              type="radio"
              name={question.question}
              onChange={() => {
                console.log("SI");
              }}
              className="root__input"
            />
            <p className="root__p">{inp}</p>
          </label>
        ))}
      </section>
      <div className="root__div">
        <button
          className="root__see"
          onPointerDown={
            isNext
              ? handleClickNext
              : () => {
                  handleClickSee(1);
                  setIsNext(!isNext);
                }
          }>
          {isNext ? "Next" : "See answer"}
        </button>
      </div>
    </section>
  );
}
