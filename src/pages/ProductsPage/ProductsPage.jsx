import "./ProductsPage.css";
import Header from "../../components/layout/Header/Header";
import Filters from "../../components/features/filters/Filters/Filters";
import Title from "../../components/layout/Title/Title";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import { useReducer } from "react";
import productsReducer from "../../reducers/productsReducer";

function ProductsPage() {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [
      {
        id: "1",
        title: "Teste",
        image:
          "https://mundialcalcados.vtexassets.com/arquivos/ids/6451636/foto1.jpg?v=638954562331630000",
        altImage: "só testando",
        category: "CALÇADOS",
        price: 124.9,
        oldPrice: 150,
      },
    ],
    categories: [
      {
        name: "Acessórios",
      },
      {
        name: "Esportes",
      },
      {
        name: "Pets",
      },
    ],
    filter: "",
  });

  return (
    <>
      <Header />
      <div className="content">
        <Filters categories={state.categories} />
        <div className="content-list">
          <Title title="Nossos produtos" results={"Mostrando 12 resultados"} />
          <div className="container">
            {state.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
