import myStack from '../data/myStack';
import mySkills from '../data/mySkills';
import '../styles/layout/Skills.scss';
function Skills(props) {
  const techStack = myStack.map((eachTech) => (
    <li key={eachTech} className='stack_element'>
      <p>
        {eachTech} <span> | </span>
      </p>
    </li>
  ));
  const softSkills = mySkills.map((eachSkill) => (
    <li key={eachSkill} className='skills_element'>
      {eachSkill}
    </li>
  ));

  return (
    <>
      <section className='stackandskills' id='skills'>
        <section className='stack'>
          <h3 className='section_title'>tech & stack</h3>
          <div>
            <ul className='stack_list'>{techStack}</ul>
          </div>
        </section>
        <section className='skills'>
          <h3 className='section_title'>soft skills</h3>
          <div>
            <ul className='skills_list'>{softSkills}</ul>
          </div>
        </section>
      </section>
    </>
  );
}

export default Skills;
