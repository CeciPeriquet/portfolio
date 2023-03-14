import "../styles/layout/AboutMe.scss";
import hello from "../images/ceci-helloworld.png";
import art from "../images/ceci-art.png";
import dogs from "../images/ceci-dogs.png";
import photographer from "../images/ceci-makingpics.png";
import playing from "../images/ceci-playing.png";
import press from "../images/ceci-press.png";
import posters from "../images/ceci-posters.png";
import talking from "../images/ceci-talking.png";

function AboutMe(props) {
  return (
    <>
      <section className="aboutme left" id="aboutme">
        <h3 className="section_title" id="aboutme">
          about me
        </h3>

        <ul className="aboutme-list">
          <li className="aboutme-list-item-left">
            <img src={hello} alt="" className="aboutme-img" />
            <p className="aboutme-text">
              Hi there, I’m Cecilia, a junior front-end developer. In fact,
              everybody calls me Ceci, only my Mum (when she’s angry at me)
              calls me Cecilia, but I understand it’s quite difficult to
              pronounce Ceci in other languages and even in some parts of Spain…
              so, do as u can.
            </p>
          </li>
          <li className="aboutme-list-item-right">
            <img src={dogs} alt="" className="aboutme-img " />
            <p className="aboutme-text">
              I’m half Spanish, quarter French and quarter English. I was born
              in Madrid, but I’ve lived in Tenerife, Valencia, London and now
              I’m in Santander (yep, going to the beach is free and awesome). I
              really need a coffee (or two) first thing in the morning. I’ve got
              two cats but I’m the kind of person who says hi to every single
              dog in the streets.
            </p>
          </li>
          <li className="aboutme-list-item-left">
            <img src={photographer} alt="" className="aboutme-img " />
            <p className="aboutme-text">
              I’ve got a Bachelor Degree in Media and Communication, and some
              design courses. I’ve worked in TV for the past few years (making
              reality shows and sport live coverage events, specially giving
              technical support on AVID software), but I’ve also been a
              waitress, a shop assistant, I’ve worked in marketing agencies, and
              I even appear in an Almodovar movie 🤷🏻‍♀️.
            </p>
          </li>

          <li className="aboutme-list-item-right">
            <img src={playing} alt="" className="aboutme-img " />
            <p className="aboutme-text">
              As a hobby I used to make music photography, then I decided I also
              wanted to be in the pictures so I had a few bands as well (I
              organized gigs, designed posters and managed social media). I also
              like to draw, usually with markers directly into paper (so I can
              make some analogue stuff and keep out of my computer, but I also
              enjoy digital illustration and design). I’ve also made some short
              films and music videos.
            </p>
          </li>
          <li className="aboutme-list-item-solo">
            <img src={art} alt="" className="aboutme-img " />
            <img src={press} alt="" className="aboutme-img " />
            <img src={posters} alt="" className="aboutme-img " />
          </li>
          <li className="aboutme-list-item-left">
            <img src={talking} alt="" className="aboutme-img " />
            <p className="aboutme-text">
              Right now I edit a collaborative zine, that allows me to meet and
              connect writers and illustrators (and I also write and draw
              myself). It’s a really cool project, that has given me the
              opportunity to give talks and run a successful crowdfunding
              campaign. Oh, I forgot to say that I learnt to speak before I was
              able to walk.
            </p>
          </li>
          <li className="aboutme-list-item-solo">
            <p className="aboutme-text">
              Anyway, I just finished a Web Development Bootcamp and I’m whiling
              to find a company to keep learning and growing as a front-end
              developer and share all my previous knowledge.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutMe;
