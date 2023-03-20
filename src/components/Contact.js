import "../styles/layout/Contact.scss";
import SocialMedia from "./SocialMedia";
function Contact(props) {
  return (
    <>
      <section className="contact" id="contact">
        <h3 className="section_title left contact-title" id="contact">
          contact
        </h3>
        <div className="contact-container">
          <div className="contact-leftside">
            <p className="contact-leftside-title">let's get in touch!</p>
            <p className="contact-leftside-text">you can find me here:</p>
            <SocialMedia></SocialMedia>
            <p className="contact-leftside-text">you can download my resume:</p>
            <a
              href="cperiquet-dev-resume-portfolio.pdf"
              className="contact-leftside-button button"
              download
            >
              resume
            </a>
          </div>
          <div className="contact-rightside">
            <h4 className="contact-rightside-title">
              or you can drop me a line =)
            </h4>
            <form
              action="https://formspree.io/f/xknazlpo"
              method="POST"
              className="form"
            >
              <label className="form-label">
                Please don't forget to type your name and email so I can answer
                you back.
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email@whatever.com"
                className="form-input"
                required
              />
              <label>What can I do for you?</label>
              <textarea name="message" className="form-textarea"></textarea>
              <button type="submit" className="form-button button">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
