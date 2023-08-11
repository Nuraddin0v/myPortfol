/** @format */

import "./Section.scss";
const Section = () => {
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
            <li>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </li>
            <li>
              Proven experience building successful products for clients across
              several countries.
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
            <h1>Over the years,</h1>
            <p>
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </p>
            <p>
              Currently, I work at Shopify as a Senior Frontend Engineer
              crafting thoughtful and inclusive experiences that adhere to web
              standards for over 3 million merchants across the world.
            </p>
            <p>
              Before now, I was Principal Frontend Engineer at hellotax, where I
              worked on a suite of tools and services tailored towards automated
              VAT compliance for multi-channel sellers in Europe.
            </p>
            <p>
              Prior to hellotax, I was Senior frontend engineering consultant
              with Pixel2HTML, building JavaScript applications and interfaces
              for orgs and individuals.
            </p>
            <p>
              I once also led the frontend team at Conectar, an e-learning
              startup through building multiple React applications into a single
              robust learning platform.
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
          <form>
            <span>
              <div className="name">
                <label id="label">Your Name</label>
                <br />
                <input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="email">
                <label id="label">Your Email</label>
                <br />
                <input type="text" placeholder="Enter your email address" />
              </div>
            </span>
            <div className="message">
              <label id="label">Your message</label>
              <br />
              <input type="text" placeholder="Information about yourself" />
            </div>
            <button type="button">
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
