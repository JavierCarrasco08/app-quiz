import "./App.css";
import history from "./data";
import SelectHistory from "./components/history/History";
import ResumeHistory from "./components/resume/Resume-history";

function App() {
  return (
    <>
      {/* <section className="root__select-history">
        <SelectHistory name="YouTube" />
        <SelectHistory name="Twitter" />
        <SelectHistory name="Instagram" />
        <SelectHistory name="Microsoft" />
        <SelectHistory name="Linux" />
        <SelectHistory name="Apple" />
      </section> */}
      <article className="root__resume">
        <ResumeHistory
          name={history.YouTube.name}
          resume={history.YouTube.history}
        />
      </article>
    </>
  );
}

export default App;
