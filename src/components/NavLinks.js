import { Link } from "react-scroll";
function NavLinks(props) {
  return (
    <ul className="header_menu">
      <li>
        <Link
          activeClass="active"
          smooth
          spy
          to="projects"
          className="nav-link"
        >
          projects
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy to="aboutme" className="nav-link">
          about me
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy to="skills" className="nav-link">
          tech stack
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy to="contact" className="nav-link">
          contact
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
