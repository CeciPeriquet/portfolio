import '../styles/layout/ProjectList.scss';
import ProjectElement from './ProjectElement';
function ProjectList(props) {
  const projectCard = props.projectData.map((eachProject) => {
    return (
      <li className='project_list-item' key={eachProject.id}>
        <ProjectElement eachProject={eachProject} />
      </li>
    );
  });
  return (
    <>
      <section className='project' id='projects'>
        <h3 className='section_title'>some of my projects</h3>
        <ul className='project_list'>{projectCard}</ul>
      </section>
    </>
  );
}

export default ProjectList;
