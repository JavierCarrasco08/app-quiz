export default function SelectHistory({ name, onSelect }) {
  return <button onPointerDown={() => onSelect(name)}>{name}</button>;
}
