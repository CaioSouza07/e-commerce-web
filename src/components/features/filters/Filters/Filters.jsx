import "./Filters.css";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import Input from "../../../ui/Input/Input";
import Button from "../../../ui/Button/Button";

function Filters({ categories }) {
  return (
    <div className="container-filters">
      <p className="title">CATEGORIAS</p>
      {categories.map((category) => (
        <Checkbox id={category.name} name={category.name} value={category.name}>
          {category.name}
        </Checkbox>
      ))}
      <div className="divider"></div>
      <p className="title">PREÇO</p>
      <div className="container-price-filter">
        <Input placeholder="R$ mín" type="number"></Input>
        <div className="divider bold"></div>
        <Input placeholder="R$ máx" type="number"></Input>
      </div>
      <Button
        onClick={() => console.log("BOTAO CLICADO TESTE")}
        variant="inverted"
      >
        Aplicar Filtros
      </Button>
    </div>
  );
}

export default Filters;
