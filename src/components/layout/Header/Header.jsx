import "./Header.css";
import NavButton from "../../ui/NavButton/NavButton";
import Input from "../../ui/Input/Input";
// import Button from "../ui/Button/Button";
import { Search, ShoppingCart } from "lucide-react";

function Header({ inputValue, inputOnChange }) {
  return (
    <div className="container-header">
      <div className="container-navigation">
        <h1 className="title-ecommerce">E-COMMERCE</h1>
        <NavButton router={"/"}>Home</NavButton>
        <NavButton router={"/produtos"}>Produtos</NavButton>
      </div>
      <div className="container-features">
        <Input
          value={inputValue}
          onChange={inputOnChange}
          placeholder={"Busque por produtos..."}
        >
          <Search size={22} className="input-icon" />
        </Input>
        <NavButton router={"/carrinho"}>
          <ShoppingCart />
        </NavButton>
        <NavButton router={"/auth/login"}>Login</NavButton>
        <NavButton router={"auth/cadastro"} variant={"primary"}>
          Cadastro
        </NavButton>
      </div>
    </div>
  );
}

export default Header;
