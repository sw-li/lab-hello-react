import logo from "../assets/ironhack-logo-xs.png";
import burger from "../assets/menu-top-xs.png";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={burger} alt="burger" />
      </div>
    </nav>
  );
}

export default Navbar;
