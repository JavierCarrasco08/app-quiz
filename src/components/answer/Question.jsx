import { useState } from "react";
import Buttons from "../buttons/Buttons";
import "./question.css";
export default function Question({ questions, onPrev }) {
  const [next, setNext] = useState(0);
  let question = questions[0];
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
            className="root__input"
          />
          <p className="root__p">{question.a}</p>
        </label>
        <label htmlFor={question.b} className="root__label">
          <input
            type="radio"
            value={question.b}
            name={question.question}
            id={question.b}
            className="root__input"
          />
          <p className="root__p">{question.b}</p>
        </label>
        {question.c && (
          <label htmlFor={question.c} className="root__label">
            <input
              type="radio"
              value={question.c}
              name={question.question}
              id={question.c}
              className="root__input"
            />
            <p className="root__p">{question.c}</p>
          </label>
        )}
        {question.d && (
          <label htmlFor={question.d} className="root__label">
            <input
              type="radio"
              value={question.d}
              name={question.question}
              id={question.d}
              className="root__input"
            />
            <p className="root__p">{question.d}</p>
          </label>
        )}
      </section>
      <Buttons
        one={"Exit"}
        two={"Next"}
        onPrev={onPrev}
        onClick={handleClickNext}
      />
    </section>
  );
}
