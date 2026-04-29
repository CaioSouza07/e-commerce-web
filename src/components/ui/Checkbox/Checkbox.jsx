import { useState } from "react";
import "./Checkbox.css";

function Checkbox({ id, name, value, children }) {
  const [check, setCheck] = useState(false);
  return (
    <div className="container-checkbox">
      <input
        className="check-input"
        type="checkbox"
        id={id}
        name={name}
        checked={check}
        value={value}
        onChange={() => setCheck((prev) => !prev)}
      />
      <label className="check-label" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
