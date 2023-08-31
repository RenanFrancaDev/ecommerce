import "./index.scss";
import logo from "../../assets/dnclogo.png";
import cartLogo from "../../assets/cart.png";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <Link to={"/Home"}>
        <img src={logo} alt="logo" className="header-menu__logo" />
      </Link>
      <ul className="header-menu__central">
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <a href="#">Novidades</a>
        </li>
        <li>
          <a href="#">Feminino</a>
        </li>
        <li>
          <a href="#">Masculino</a>
        </li>
        <li>
          <a href="#">Atendimento</a>
        </li>
      </ul>
      <div className="header-menu__cart-shop">
        <h1>Meu carrinho</h1>
        <img src={cartLogo} alt="cartLogo" />
      </div>
    </header>
  );
};

export default HeaderMenu;
