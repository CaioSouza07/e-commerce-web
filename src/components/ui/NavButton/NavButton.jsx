import "./NavButton.css";
import { NavLink } from "react-router";

function NavButton({ children, router }) {
  return (
    <NavLink to={router} className="nav">
      {({ isActive }) => (
        <span className={`nav-btn ${isActive ? "nav-btn-active" : ""}`}>
          {children}
        </span>
      )}
    </NavLink>
  );
}

export default NavButton;
