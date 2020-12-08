import logoHome from "../img/logo.png";
const Header = () => {
  const handleDarkMode = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle(
      "active"
    );
  };
  return (
    <header className="header">
      <div className="container-logo">
        <img src={logoHome} alt="logo" height="40" />
      </div>
      <div className="btn-dark-mode">
        <input type="checkbox" id="menu" onChange={handleDarkMode} />
        <label htmlFor="menu" className="menu-label"></label>
      </div>
    </header>
  );
};
export default Header;
