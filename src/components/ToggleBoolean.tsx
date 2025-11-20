import { useBoolean } from "../hooks/useBoolean";

export const ToggleBooleanComponent = () => {
  const { value, setTrue, setFalse, toggle } = useBoolean();

  return (
    <div>
      <p>{value ? "enabled" : "disabled"}</p>

      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Enable</button>
      <button onClick={setFalse}>Disable</button>
    </div>
  );
};
