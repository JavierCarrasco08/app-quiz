import "./App.css";
import history, { questions } from "./data";
import SelectHistory from "./components/history/History";
import ResumeHistory from "./components/resume/Resume-history";
import { useState } from "react";
import Question from "./components/answer/Question";

function App() {
  // const [questions, setQuestions] = useState(null);
  // function handleClickSelectHistory(name) {
  //   setQuestions(name);
  // }
  // if (questions === null) {
  //   return (
  //     <section className="root__select-history">
  //       <SelectHistory name="YouTube" onSelect={handleClickSelectHistory} />
  //       <SelectHistory name="Instagram" onSelect={handleClickSelectHistory} />
  //       <SelectHistory name="Twitter" onSelect={handleClickSelectHistory} />
  //       <SelectHistory name="Microsoft" onSelect={handleClickSelectHistory} />
  //       <SelectHistory name="Apple" onSelect={handleClickSelectHistory} />
  //       <SelectHistory name="Linux" onSelect={handleClickSelectHistory} />
  //     </section>
  //   );
  // }
  // if ("YouTube Instagram Twitter Linux Apple Microsoft".includes(questions)) {
  //   let resume = history[questions];
  //   return (
  //     <article className="root__resume">
  //       <ResumeHistory
  //         name={resume.name}
  //         resume={resume.history}
  //         onPrev={() => setQuestions(null)}
  //       />
  //     </article>
  //   );
  // }
  return <Question questions={questions.YouTube} />;
}

export default App;
