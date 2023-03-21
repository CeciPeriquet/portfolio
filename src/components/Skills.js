import myStack from "../data/myStack";

import "../styles/layout/Skills.scss";
function Skills(props) {
  const techStack = myStack.map((eachTech) => (
    <li key={eachTech} className="stack_element">
      <p>
        {eachTech} <span className="stack-marker"> | </span>
      </p>
    </li>
  ));

  return (
    <>
      <section className="stackandskills" id="skills">
        <h3 className="section_title left">tech stack</h3>
        <section className="stack">
          <div>
            <ul className="stack_list">{techStack}</ul>
          </div>
          <div className="other">
            <h4>Other things you may want to know:</h4>
            <div className="other-list">
              <p className="other-list-element">
                I'm learning <span>TypeScript </span>and improving "the basis"
                with <span>Vanilla JavaScript </span>
                challenges.
              </p>
              <p className="other-list-element">
                I love <span>React JS</span>, but I'd like to learn Angular as
                well.
              </p>
              <p className="other-list-element">
                I'm also very interested in <span> "Creative coding" </span>
                (like p5 js) and animation libraries such as
                <span> Gsap</span>.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Skills;
