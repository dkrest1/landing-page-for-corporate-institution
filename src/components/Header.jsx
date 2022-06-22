import Bulb from "../assets/logo-2.png";
import Hero from "../assets/hero-img.png";
const Header = () => {
  return (
    <header className="header">
      <div className="col-1">
        <div className="header-logo">
          <img src={Bulb} alt="hero bulb" />
          <p>Lighting up your design career path for you</p>
        </div>
        <div className="header-primary">
          <h1>
            <span className="header-primary-main">Learn different </span>
            <span className="header-primary-sub">design principles</span>
          </h1>
          <p>
            Bulb allows you to learn the diverse design principles we have out
            there, and thats not all, you get to see their real life
            applications too.
          </p>
        </div>
        <div className="header-button">
          <button className="button-1">Create an Account</button>
          <button className="button-2">Join Community</button>
        </div>
      </div>
      <div className="col-2">
        <img className="col-2-img" src={Hero} alt="hero img" />
      </div>
    </header>
  );
};

export default Header;
