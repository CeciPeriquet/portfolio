import "../styles/layout/Header.scss";
import ReactSwitch from "react-switch";

import MobileNav from "./MobileNav";
import RegularNav from "./RegularNav";

function Header(props) {
  const toggleTheme = () => {
    props.setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="header">
        <MobileNav></MobileNav>
        <RegularNav></RegularNav>
        <div className="switch">
          <label className="switch-label">
            {props.theme === "light" ? "light" : "dark"}
          </label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={props.theme === "dark"}
          />
        </div>
        <div className="socialmedia right">
          <ul className="socialmedia-list ">
            <li>
              <a
                href="https://github.com/CeciPeriquet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github-alt"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ceciliaperiquet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
