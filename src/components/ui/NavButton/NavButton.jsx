import "./NavButton.css";
import { NavLink } from "react-router";

function NavButton({ children, router, variant }) {
  return (
    <NavLink to={router} className="nav">
      {({ isActive }) => (
        <span
          className={`nav-btn ${isActive ? "nav-btn-active" : ""} nav-btn-${variant}`}
        >
          {children}
        </span>
      )}
    </NavLink>
  );
}

export default NavButton;
