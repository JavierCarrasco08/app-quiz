import "./history.css";

export default function SelectHistory({ name, onSelect }) {
  return (
    <button
      className="root__button-history"
      onPointerDown={() => onSelect(name)}>
      {name}
    </button>
  );
}
