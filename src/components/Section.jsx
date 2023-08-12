/** @format */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Section.scss";
const Section = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_gtz60lv",
        "template_4e4ivej",
        form.current,
        "tVFqMhs2LkBzEgVC1"
      )
      .then(
        (result) => {
          alert(result);
          console.log("jonatildi");
          // show the user a success message
        },
        (error) => {
          alert(error);
          console.log("error");
          // show the user an error
        }
      );
  };
  return (
    <div>
      <section className="one">
        <div className="boxes">
          <article>
            <div className="box one">
              <h1 className="heading">
                Frontend Developer<span>.</span>
              </h1>
              <p className="bolid">
                I like to craft solid and scalable frontend products with great
                user experiences.
              </p>
            </div>
          </article>
          <figure className="box two">
            <div className="figure"></div>
          </figure>
        </div>
        <div className="text bottom">
          <ul>
            <li>Experienced in many advanced javascript libraries.</li>
            <li>
              I worked at Sigmasoftware for 3 months. I don't have any official
              experience yet.
            </li>
          </ul>
        </div>
      </section>
      <section className="two">
        <div className="one_1">
          <h1>Design</h1>
          <p>
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
        </div>
        <div className="two_2">
          <h1>Engineering</h1>
          <p>
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
        </div>
      </section>
      <section className="three">
        <div className="boxes">
          <article>
            <h1>In the coming years</h1>
            <p>
              Insha'Allah, I will soon start working in Mohirdev.I will start
              learning English as soon as I have time after I get a job. I gain
              experience doing many big projects at work. After learning
              English. I will submit a job application to Epam. Inshallah, I
              will get a job at Epam and gain experience in many projects.
            </p>
          </article>
          <figure>
            <div></div>
          </figure>
        </div>
      </section>
      <section className="four">
        <div className="boxes">
          <div className="box one">
            <article>
              <h1>
                I build & <br /> design stuff
              </h1>
              <p className="p">
                Open source <br /> projects, web apps <br /> and experimentals.
              </p>
            </article>
            <a style={{ alignItems: "center", display: "flex" }}>
              <p>SEE MY WORK</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#4831d4"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </a>
          </div>
          <div className="box two">
            <article>
              <h1>
                I write, <br /> sometimes
              </h1>
              <p className="p">
                About design, <br /> frontend dev, <br /> learning and life.
              </p>
            </article>
            <a style={{ alignItems: "center", display: "flex" }}>
              <p>READ MY ARTICLES</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#4831d4"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="boxes">
          <h1>Send me a message!</h1>
          <p>
            Got a question or proposal, or just want <br /> to say hello? Go
            ahead.
          </p>
          <form ref={form}>
            <span>
              <div className="name">
                <label id="label">Your Name</label>
                <br />
                <input
                  name="user_name"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="email">
                <label id="label">Your Email</label>
                <br />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </span>
            <div className="message">
              <label id="label">Your message</label>
              <br />
              <input
                name="message"
                type="text"
                placeholder="Information about yourself"
              />
            </div>
            <button type="button" onClick={sendEmail}>
              Shoot
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#4831d4"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Section;
