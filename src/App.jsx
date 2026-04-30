import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductsPage from "./pages/Products/ProductsPage";
import SigninPage from "./pages/Signin/SigninPage";
import SignupPage from "./pages/Signup/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/auth/login" element={<SigninPage />} />
        <Route path="/auth/cadastro" element={<SignupPage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        {/* <Route
          exact
          path="/carrinho"
          element={
            <RotaPrivada>
              <CartPage />
            </RotaPrivada>
          }
        /> */}
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
