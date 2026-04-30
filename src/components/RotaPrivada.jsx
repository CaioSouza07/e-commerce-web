import { Navigate, useLocation } from "react-router";

function RotaPrivada({ children }) {
  // const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // if(loading) return <Spinner />;

  //   if (!isAuthenticated) {
  //     return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
  //   }
  return children;
}

export default RotaPrivada;
