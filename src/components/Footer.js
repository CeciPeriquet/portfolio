import "../styles/layout/Footer.scss";
import BackToTopArrow from "./BackToTopArrow";

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <BackToTopArrow></BackToTopArrow>
        <div className="footer-info">
          <p className="footer_text ">
            &copy; cecilia periquet <span className="footer_heart"> ❤︎ </span>{" "}
            2023
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
