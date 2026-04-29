import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  return (
    <>
      <Button
        onClick={() => console.log("TESTE: CLICADO NO BOTAO")}
        variant={"teste"}
      >
        <p>teste</p>
      </Button>
    </>
  );
}

export default App;
