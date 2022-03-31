import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/layout">Tip Calculator</Link>
      </div>
    </nav>
  );
};

export default Navbar;
