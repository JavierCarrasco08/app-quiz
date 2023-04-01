import "./history.css";

export default function SelectHistory({ name, onSelect }) {
  return (
    <button
      className="root__button-history"
      onPointerDown={() => console.log("SI")}>
      {name}
    </button>
  );
}
