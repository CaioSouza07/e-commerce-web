import "./Card.css";

function Card({ children, variant, onClick }) {
  return (
    <div className={`card card-${variant}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
