import "../styles/layout/AboutMe.scss";

function AboutMe(props) {
  return (
    <>
      <section className="aboutme left" id="aboutme">
        <h3 className="section_title" id="aboutme">
          about me
        </h3>
        <article className="aboutme-info">
          <div className="aboutme-img"></div>
          <div className="aboutme-text-container">
            <ul className="aboutme-list">
              <li className="aboutme-text">
                Media professional with more than ten years experience in
                post-production recently transitioned to web development.
              </li>
              <li className="aboutme-text">
                Managed, trained and given technical support to different teams
                both face to face and remote.
              </li>
              <li className="aboutme-text">
                Prioritized tasks in order to follow companies schedules.
              </li>
              <li className="aboutme-text">
                I always try to improve workflows and develop new ways of
                achieving objectives.{" "}
              </li>
              <li className="aboutme-text">
                Documentation and fluid communication are a must.
              </li>
              <li className="aboutme-text">
                Played in several bands (organized concerts, designed posters
                and managed social media)
              </li>
              <li className="aboutme-text">
                I currently edit a collaborative fanzine that has led me to give
                talks and run a successful crowdfunding campaign.
              </li>
              <li className="aboutme-text">
                Looking for an opportunity to grow front-end development skills
                in an innovative environment.
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}

export default AboutMe;
