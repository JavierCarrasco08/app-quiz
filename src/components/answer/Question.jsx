import { useState } from "react";
import "./question.css";
export default function Question({ questions, history, End }) {
  const [next, setNext] = useState(0);
  const [correct, setCorrect] = useState({
    num: 0,
    id: null,
    done: false,
  });
  let isCorrect = null;
  const [isNext, setIsNext] = useState(false);
  let question = questions[next];
  function handleClickNext() {
    setIsNext(!isNext);
    if (next === questions.length - 1) {
      End(correct);
    } else {
      setNext(next + 1);
      setCorrect({
        ...correct,
        done: false,
        id: null,
      });
    }
  }
  function handleOnChange(text, id) {
    if (history.history.includes(text)) {
      setCorrect({
        num: correct.num + 1,
        done: true,
        id: id,
      });
    } else {
      setCorrect({
        ...correct,
        done: false,
        id: id,
      });
    }
  }
  if (correct.done) {
    isCorrect = "correct";
  } else {
    isCorrect = "incorrect";
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
              onChange={(e) => {
                handleOnChange(e.target.value, index);
              }}
              className="root__input"
            />
            {isNext ? (
              <p className={`root__p ${correct.id === index && isCorrect}`}>
                {inp}
              </p>
            ) : (
              <p className="root__p">{inp}</p>
            )}
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
                  setIsNext(!isNext);
                }
          }>
          {isNext ? "Next" : "See answer"}
        </button>
      </div>
    </section>
  );
}
