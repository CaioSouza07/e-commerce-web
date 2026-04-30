import "./ProductCard.css";
import Card from "../../../ui/Card/Card";

function ProductCard({ product }) {
  return (
    <Card variant={"primary"} onClick={() => console.log("cliquei no card")}>
      <div className="container-img">
        <img src={product.image} alt={product.altImage} />
      </div>
      <div className="container-infos">
        <p className="info-category">{product.category}</p>
        <h1 className="info-title">{product.title}</h1>
        <h3 className="info-price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          {product.oldPrice && (
            <p className="info-oldPrice">
              {product.oldPrice.toLocaleString("pt-BR", {
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
