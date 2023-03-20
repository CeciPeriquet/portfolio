import "../styles/layout/AboutMe.scss";
import hello from "../images/ceci-helloworld.png";
import art from "../images/ceci-art.png";
import dogs from "../images/ceci-dogs.png";
import photographer from "../images/ceci-makingpics.png";
import playing from "../images/ceci-playing.png";
import press from "../images/ceci-press.png";
import posters from "../images/ceci-posters.png";
import talking from "../images/ceci-talking.png";
// import { gsap } from "gsap";
// import { CSSRulePlugin } from "gsap/all";
// import { useRef, useEffect } from "react";

function AboutMe(props) {
  /* const aboutMeRef = useRef(null);
  useEffect(() => {
    const el = aboutMeRef.current;
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
    gsap.fromTo(el, {}, {});
  }, []); */
  return (
    <>
      <section className="aboutme left" id="aboutme">
        <h3 className="section_title" id="aboutme" /* ref={aboutMeRef} */>
          about me
        </h3>

        <ul className="aboutme-list">
          <li className="aboutme-list-item-left">
            <img
              className="aboutme-img img-left"
              src={hello}
              alt="Me as a little child"
            />

            <p className="aboutme-text">
              <strong>
                Hi there, I’m Cecilia, a junior front-end developer.{" "}
              </strong>
              I’m half Spanish, quarter French and quarter English. I was born
              in Madrid, but I’ve lived in Tenerife, Valencia, London and now
              I’m in Santander (yep, going to the beach is free and awesome). In
              fact, everybody calls me Ceci, only my Mum (when she’s angry at
              me) calls me Cecilia, but I understand it’s quite difficult to
              pronounce Ceci in other languages and even in some parts of Spain…
              so, do as u can.
            </p>
          </li>
          <li className="aboutme-list-item-right">
            <img
              src={dogs}
              alt="Me, kissing a dog"
              className="aboutme-img img-right"
            />
            <p className="aboutme-text">
              {" "}
              I learnt to speak before I was able to walk, I guess that's why I
              studied Communication. I’ve got a Bachelor's Degree in Media and
              Communication, but I've been always passionate by design, so I
              also made some graphic and web design courses. I really need a
              coffee (or two) first thing in the morning. I’ve got two cats but
              I’m the kind of person who says hi to every single dog in the
              streets.
            </p>
          </li>

          <li className="aboutme-list-item-left">
            <img
              src={photographer}
              alt="Me, holding a camera and making pics"
              className="aboutme-img img-left"
            />

            <p className="aboutme-text">
              I’ve worked in TV for the past few years (making reality shows and
              sport live coverage events, specially giving technical support on
              AVID software), but I’ve also worked in marketing agencies, been a
              waitress, a shop assistant and I even appear in an Almodovar movie
              🤷🏻‍♀️.
            </p>
          </li>

          <li className="aboutme-list-item-right">
            <img
              src={playing}
              alt="Me, playing a guitar"
              className="aboutme-img img-right"
            />
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
            <img
              src={press}
              alt="A band posing for me, published on the press"
              className="aboutme-img "
            />
            <img
              src={posters}
              alt="Some of my music poster designs"
              className="aboutme-img "
            />
          </li>
          <li className="aboutme-list-item-left">
            <img
              src={talking}
              alt="Me, talking, moving my hands except when I'm holding a beer"
              className="aboutme-img img-left"
            />
            <p className="aboutme-text">
              Right now I layout, edit and self-publish a collaborative zine,
              that allows me to meet and connect writers and illustrators (and I
              also write and draw myself). It’s a really cool project, that has
              given me the opportunity to give talks and run a successful
              crowdfunding campaign. (I told you, I learnt to speak before I was
              able to walk).
            </p>
          </li>
          <li className="aboutme-list-item-right">
            <img
              src={art}
              alt="Me, selling tote bags and other illustrated stuff"
              className="aboutme-img img-right"
            />
            <p className="aboutme-text">
              Anyway, I'm a newbie in Web Development but I'm happy to be a part
              of such a special, creative and supportive community. Now I just
              need to find a company that allows me to keep learning and growing
              as a front-end developer and share all my previous knowledge and
              skills. Might be yours?
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutMe;
