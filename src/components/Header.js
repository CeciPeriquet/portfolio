import "../styles/layout/Header.scss";
import ReactSwitch from "react-switch";

import MobileNav from "./MobileNav";
import RegularNav from "./RegularNav";
import SocialMedia from "./SocialMedia";

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
          <SocialMedia></SocialMedia>
        </div>
      </header>
    </>
  );
}

export default Header;
