import Vector from "../assets/Vector.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-row1">
        <div className="footer-logo">
          <img src={Vector} alt="footer-logo" />
        </div>
        <ul>
          <li>Bulb pro</li>
          <li>Coming soon</li>
        </ul>
        <ul>
          <li>Principles</li>
          <li>Design</li>
          <li>Development</li>
          <li>Testing</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Email</li>
          <li>Twitter</li>
          <li>Meta</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-row2">
        <div className="footer-row2-col1">
          <p>Head office : no 2, house no 12, online, metaverse city</p>
          <p>bulb 2022</p>
        </div>
        <div className="footer-row2-col2">
          <p>humbly supported by bulb technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
