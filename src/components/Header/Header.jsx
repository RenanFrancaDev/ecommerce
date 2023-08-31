import { Link } from "react-router-dom";
import dncLogo from "../../assets/dnclogo.png";
import "./index.scss";

const Header = () => {
  return (
    // Block
    <div className="header">
      <Link to={"/Home"}>
        <img className="header__img" src={dncLogo} alt="dnc logo" />
      </Link>
    </div>
  );
};

export default Header;
