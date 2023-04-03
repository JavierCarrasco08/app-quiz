import "./buttons.css";

export default function Buttons({ one, two, onClick = null, onPrev = null }) {
  return (
    <div className="root__buttons">
      <button className="root__prev" onPointerDown={onPrev}>
        {one}
      </button>
      <button className="root__next" onPointerDown={onClick}>
        {two}
      </button>
    </div>
  );
}
