import "./Input.css";

function Input({ children, placeholder, value, onChange }) {
  return (
    <div className="container-input">
      {children}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
