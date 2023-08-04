import "./navbar.scss";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>PandaLove</span>
        </div>
      </Link>
      <div className="icons">
        <Link to="/books" className="icon">
          <GiBookshelf title="Books" />
          <span>Books</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
