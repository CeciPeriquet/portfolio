import myStack from "../data/myStack";

import "../styles/layout/Skills.scss";
function Skills(props) {
  const techStack = myStack.map((eachTech) => (
    <li key={eachTech} className="stack_element">
      <p>
        {eachTech} <span> | </span>
      </p>
    </li>
  ));

  return (
    <>
      <section className="stackandskills" id="skills">
        <section className="stack">
          <h3 className="section_title">tech stack</h3>
          <div>
            <ul className="stack_list">{techStack}</ul>
          </div>
          <div className="other">
            <h4>Other things you may want to know:</h4>
            <ul className="other-list">
              <li className="other-list-element">
                Right now: I'm learning <strong>TypeScript </strong>and
                improving "the basis" with <strong>Vanilla JavaScript</strong>{" "}
                challenges.
              </li>
              <li className="other-list-element">
                I love <strong>React JS</strong>, but I'd like to learn Angular
                as well.
              </li>
              <li className="other-list-element">
                I'm also very interested in <strong> "Creative coding" </strong>
                (like p5 js) and animation libraries such as
                <strong> Gsap</strong>.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}

export default Skills;
