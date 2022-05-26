"use strict";

class About extends HTMLElement {
  constructor() {
    // establish prototype chain
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    // creating a container for the editable-list component
    const about = document.createElement("template");
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = "../../public/styles/about.css";

    // get attribute values from getters

    // adding a class to our container for the sake of clarity
    // About.classList.add("editable-list");

    // creating the inner HTML of the editable list element
    about.innerHTML = `
      <section class="about" id="about">
        <h2 class="about__title">About Me</h2>
        <div class="about__description">
            <div class="about__description__text">
                <h4 class="about__p">At some point of my career I decided to make a change and start coding. Since then, (jun, 2020) I’ve been coding every
                day, and discovering everything this world had to show me.<b> What I found couldn’t be better.</b>
                </h4>
                <h4 class="about__p"><b>I started with HTML, CSS and JavaScript</b> because they're awesome and I needed a place to start from.
                </h4>
                <h4 class="about__p">From there, I jumped to <b>react, node, mongoDB, git, ejs…</b> And currently I could say I’m ready to get into the IT world <b>to
                start building outstandings and high quality apps.</b>
                </h4>
                <h4 class="about__p">My goal is getting the hands dirty with AI and machine learning as soon as I can, because these technologies are awesome and the <s>future</s>  present
                </h4>
                <h4 class="about__p">I have always taken a <b>deep interest in learning new things.</b> I'm passionate about the IT world and anything that has
                something to do with software engineering and coding.
                </h4>
                <h4 class="about__p">At the moment, junior full stack developer and builder. And very soon code builder.
                </h4>
                <h4 class="about__p">Based in Brighton, UK and born in Madrid, Spain in 1992.</h4>
            </div>
            <div class="about__description__image">
                <img src="public/assets/secondimg.png" alt="picture profile" >
            </div>
        </div>
      </section>

      `;
    shadowRoot.appendChild(styles);
    // appending the container to the shadow DOM
    shadowRoot.appendChild(about.content.cloneNode(true));
  }
}

// let the browser know about the custom element
customElements.define("about-component", About);
