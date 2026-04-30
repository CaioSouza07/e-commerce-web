import "./ProductsPage.css";
import Header from "../../components/ui/Header/Header";

function ProductsPage() {
  return (
    <>
      <Header />
      <div className="content">
        {/* <Filters categories={state.categories} />
        <div className="content-list">
          <Title title="Nossos produtos" results={"Mostrando 12 resultados"} />
          <div className="container">
            {state.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProductsPage;
