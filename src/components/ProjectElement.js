function ProjectElement({ eachProject }) {
  return (
    <article className="project_list-item--card">
      <img
        src={eachProject.img}
        alt={eachProject.name}
        className="project_list-item--img"
      />
      <div className="project_list-item--info">
        <h4 className="project_list-item--title">{eachProject.name}</h4>
        <div className="project_list-item--text">
          <p>{eachProject.desc}</p>
          <p>{eachProject.kind}</p>
        </div>
      </div>
      <nav>
        <ul className="project_list-item--links">
          <li>
            <a
              href={eachProject.repoURL}
              target="_blank"
              className="project_list-item--icon"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a
              href={eachProject.webURL}
              target="_blank"
              className="project_list-item--icon"
              rel="noreferrer"
            >
              <i className="fa-solid fa-desktop"></i>
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export default ProjectElement;
