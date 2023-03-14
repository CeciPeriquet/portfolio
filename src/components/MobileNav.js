import NavLinks from "./NavLinks";
import { useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

function MobileNav(props) {
  const [openBurger, setOpenBurger] = useState(false);
  const handleBurger = () => {
    setOpenBurger(!openBurger);
  };

  function whichIcon() {
    if (!openBurger) {
      return (
        <CgMenuRound
          className="mobile-nav-icon"
          size="44px"
          onClick={handleBurger}
        />
      );
    } else {
      return (
        <CgCloseO
          className="mobile-nav-icon"
          size="42px"
          onClick={handleBurger}
        />
      );
    }
  }

  return (
    <>
      <nav className="mobile-nav">
        {whichIcon()}
        {openBurger && <NavLinks />}
      </nav>
    </>
  );
}

export default MobileNav;
