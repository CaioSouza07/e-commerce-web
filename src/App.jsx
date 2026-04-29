import "./App.css";
import Button from "./components/ui/Button/Button";
import Card from "./components/ui/Card/Card";

function App() {
  return (
    <>
      <Button
        onClick={() => console.log("TESTE: CLICADO NO BOTAO")}
        variant={"outlined"}
      >
        <p>teste</p>
      </Button>
      <Card variant={"primary"} onClick={() => console.log("cliquei no card")}>
        <p> testando card</p>
      </Card>
    </>
  );
}

export default App;
