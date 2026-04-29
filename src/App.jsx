import { Search } from "lucide-react";
import "./App.css";
import Input from "./components/ui/Input/Input";
import ProductCard from "./components/ui/ProductCard/ProductCard";

function App() {
  return (
    <>
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
      </div>
      <Input placeholder={"Busque por um produto..."}>
        <Search className="input-icon" size={20} />
      </Input>
    </>
  );
}

export default App;
