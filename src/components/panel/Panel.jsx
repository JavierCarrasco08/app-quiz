import gitHub from "./../../assets/svgs/github.svg";
import instagram from "./../../assets/svgs/instagram.svg";
import "./panel.css";
import Buttons from "../buttons/Buttons";

export default function Panel({ correct }) {
  let num = correct.num * 20;
  return (
    <section className="root__end">
      <header className="root__hero">
        <p className="root__paragraph">
          If you found the application fun, you can follow me on my social
          networks 😁 :
        </p>
        <nav className="root__nav">
          <a
            href="https://github.com/JavierCarrasco08"
            className="root__link"
            title="Github"
            target="_blank"
            rel="noopener referrer">
            <img className="root__img" src={gitHub} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/javier_carrasco08/?hl=es-la"
            className="root__link"
            title="Instagram"
            target="_blank"
            rel="noopener referrer">
            <img className="root__img" src={instagram} alt="Instagram" />
          </a>
        </nav>
      </header>
      <section className="root__panel">
        <div>
          <h1 className="root__Congratulation">Congratulations</h1>
          <p className="root__paragraph">
            Keep improving and thank you very much for giving me some of your
            time.
          </p>
        </div>
      </section>
      <div className="root__buttons">
        <button className="root__prev">Exit</button>
      </div>
    </section>
  );
}
