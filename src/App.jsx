import "./App.css";
import history, { allQuestions } from "./data";
import SelectHistory from "./components/history/History";
import ResumeHistory from "./components/resume/Resume-history";
import { useState } from "react";
import Question from "./components/answer/Question";
import Panel from "./components/panel/Panel";

function App() {
  const [questions, setQuestions] = useState(null);
  function handleClickSelectHistory(name) {
    setQuestions(name);
  }
  if (questions === null) {
    return (
      <section className="root__select-history">
        <SelectHistory name="YouTube" onSelect={handleClickSelectHistory} />
        <SelectHistory name="Instagram" onSelect={handleClickSelectHistory} />
        <SelectHistory name="Twitter" onSelect={handleClickSelectHistory} />
        <SelectHistory name="Microsoft" onSelect={handleClickSelectHistory} />
        <SelectHistory name="Apple" onSelect={handleClickSelectHistory} />
        <SelectHistory name="Linux" onSelect={handleClickSelectHistory} />
      </section>
    );
  }
  if ("YouTube Instagram Twitter Linux Apple Microsoft".includes(questions)) {
    let resume = history[questions];
    return (
      <article className="root__resume">
        <ResumeHistory
          name={resume.name}
          resume={resume.history}
          onPrev={() => setQuestions(null)}
          onNext={() => setQuestions([allQuestions[questions], questions])}
        />
      </article>
    );
  }
  if (questions instanceof Array) {
    return (
      <Question
        questions={questions[0]}
        history={history[questions[1]]}
        End={(correct) => setQuestions(correct)}
      />
    );
  }
  if (questions.num) {
    return <Panel onPrev={() => setQuestions(null)} correct={questions.num} />;
  }
}

export default App;
