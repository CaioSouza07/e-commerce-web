import "./Input.css";

function Input({ children, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="container-input">
      {children}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
