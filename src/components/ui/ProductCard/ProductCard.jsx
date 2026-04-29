import "./ProductCard.css";
import Card from "../Card/Card";

function ProductCard({ title, image, altImage, category, price, oldPrice }) {
  return (
    <Card variant={"primary"} onClick={() => console.log("cliquei no card")}>
      <div className="container-img">
        <img src={image} alt={altImage} />
      </div>
      <div className="container-infos">
        <p className="info-category">{category}</p>
        <h1 className="info-title">{title}</h1>
        <h3 className="info-price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          {oldPrice && (
            <p className="info-oldPrice">
              {oldPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )}
        </h3>
      </div>
    </Card>
  );
}

export default ProductCard;
