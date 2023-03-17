import "../styles/layout/Contact.scss";
function Contact(props) {
  return (
    <>
      <section className="contact" id="contact">
        <h3 className="section_title left" id="contact">
          contact
        </h3>
        <div className="contact-container">
          <div className="contact-image"></div>
          <div className="form-container">
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
                placeholder="Name"
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                required
              />
              <label>What can I do for you?</label>
              <textarea name="message" className="form-textarea"></textarea>
              <button type="submit" className="form-button">
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
