import "./index.scss";
import searchLogo from "../../assets/el_search.png";
import perfilLogo from "../../assets/perfil.png";
import favoriteLogo from "../../assets/coracao.png";

const Search = () => {
  return (
    <div className="search">
      <div className="search__input-container">
        <img
          src={searchLogo}
          alt="search logo"
          className="search__search-logo"
        />
        <input type="text" placeholder="O que você está procurando?" />
      </div>
      <div className="search__icons">
        <img src={perfilLogo} alt="" />
        <img src={favoriteLogo} alt="" />
      </div>
    </div>
  );
};

export default Search;
