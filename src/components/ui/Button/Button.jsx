function Button({ children, onClick, variant, type = "button" }) {
  return (
    <button onClick={onClick} type={type} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;
