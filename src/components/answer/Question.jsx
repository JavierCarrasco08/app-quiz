import { useState } from "react";
import "./question.css";
export default function Question({ questions }) {
  const [next, setNext] = useState(0);
  let question = questions.find((e) => e.id === next);
  function handleClickNext() {
    if (next === questions.length - 1) {
      setNext(0);
    } else {
      setNext(next + 1);
    }
  }
  return (
    <section className="root__questions">
      <h2 className="root__question">{question.question}</h2>
      <section className="root__answer">
        <label htmlFor={question.a} className="root__label">
          <input
            type="radio"
            value={question.a}
            name={question.question}
            id={question.a}
          />
          {question.a}
        </label>
        <label htmlFor={question.b} className="root__label">
          <input
            type="radio"
            value={question.b}
            name={question.question}
            id={question.b}
          />
          {question.b}
        </label>
        {question.c && (
          <label htmlFor={question.c} className="root__label">
            <input
              type="radio"
              value={question.c}
              name={question.question}
              id={question.c}
            />
            {question.c}
          </label>
        )}
        {question.d && (
          <label htmlFor={question.d} className="root__label">
            <input
              type="radio"
              value={question.d}
              name={question.question}
              id={question.d}
            />
            {question.d}
          </label>
        )}
      </section>
      <div className="root__buttons">
        <button className="root__prev">Exit</button>
        <button className="root__next" onPointerDown={handleClickNext}>
          Next
        </button>
      </div>
    </section>
  );
}
