import "./App.css";
import { Route, Routes } from "react-router";
import ProductsPage from "./pages/Products/ProductsPage";
import SigninPage from "./pages/Signin/SigninPage";
import SignupPage from "./pages/Signup/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/auth/login" element={<SigninPage />} />
      <Route path="/auth/cadastro" element={<SignupPage />} />
      <Route path="/produtos" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
