import { Button } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const handlelogout = () => {
    Navigate("/");
    localStorage.clear();
  };
  return (
    <div>
      <nav className="position">
        <Link to="#Carosal">HOME</Link>
        <Link to="#Service">SERVICE</Link>
        <Link to="#Contact">CONTACT</Link>
        <div className="logrig">
          <Button type="primary" onClick={handlelogout}>
            Logout
          </Button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
