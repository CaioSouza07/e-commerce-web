import Header from "../components/layout/Header/Header";
import Filters from "../components/features/filters/Filters/Filters";
import Title from "../components/layout/Title/Title";
import ProductCard from "../components/ui/ProductCard/ProductCard";

function ProductsPage() {
  const categories = [
    {
      name: "Acessórios",
    },
    {
      name: "Esportes",
    },
  ];
  return (
    <>
      <Header />
      <div className="content">
        <Filters categories={categories} />
        <div className="content-list">
          <Title title="Nossos produtos" results={"Mostrando 12 resultados"} />
          <div className="container">
            <ProductCard
              title={"Tênis Nike - Corrida"}
              image={
                "https://mundialcalcados.vtexassets.com/arquivos/ids/6451636/foto1.jpg?v=638954562331630000"
              }
              altImage={"Foto de um tenis nike preto"}
              category={"CALÇADOS"}
              price={124.99}
              oldPrice={150}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={"https://imgs.extra.com.br/1570667369/1xg.jpg?imwidth=500"}
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
              oldPrice={499.99}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
            <ProductCard
              title={"Camisa do Flamengo Branca vermelha e preta"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbVjPtaFPhllHeaRyyUyAFyzJ68lu5G8nZQ&s"
              }
              altImage={
                "Foto de um homem negro vestindo uma camisa vermelha, branca e preta do flamengo"
              }
              category={"ROUPAS ESPORTE"}
              price={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
