import "../styles/layout/BackToTopArrow.scss";
import { useState, useEffect } from "react";

function BackToTopArrow(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="back-arrow-container">
      <div
        className={`pulse back-arrow ${isVisible ? "" : "hidden"}`}
        onClick={handleClick}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default BackToTopArrow;
