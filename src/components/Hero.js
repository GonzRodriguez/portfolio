
  "use strict";

class HeroMenu extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });

      // creating a container for the editable-list component
      const hero = document.createElement("template");
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = "../../public/styles/hero.css";

      // get attribute values from getters

      // adding a class to our container for the sake of clarity
      // hero.classList.add("editable-list");

      // creating the inner HTML of the editable list element
      hero.innerHTML = `
    <header class="hero" id="home">
        <div class="hero__circle-lg"></div>
        <div class="hero__img">
            <img src="./assets/no-bg.png" alt="picture profile" loading="eager">
        </div>
        <div class="hero__text">
            <h3 class="hero__title">Hi there, My name is </h3>
            <span class="hero__name">Gonzalo Rodríguez</span>
            <h3 class="hero__subtitle"><em>Web Developer</em></h3>
            <div class="hero__tools__icons tools__icons">
                <ul class="tools__icons__group">
                    <li class="tools__icons__item">
                        <i class="fab fa-css3-alt"></i>
                        <p>CSS3</p>
                    </li>
                    <li class="tools__icons__item">
                        <i class="fab fa-html5"></i>
                        <p>HTML5</p>
                    </li>
                    <li class="tools__icons__item">
                        <i class="fab fa-js"></i>
                        <p>Javascript</p>
                    </li>
                    <li class="tools__icons__item">
                        <i class="fab fa-node-js"></i>
                        <p>Nodejs</p>
                    </li>
                    <li class="tools__icons__item">
                        <i class="fas fa-database"></i>
                        <p>MongoDB</p>
                    </li>
                    <li class="tools__icons__item">
                        <i class="fab fa-react"></i>
                        <p>Reactjs</p>
                    </li>
                </ul>
          </div>
        </div>
    </header>

      `;
      shadowRoot.appendChild(styles);
      // appending the container to the shadow DOM
      shadowRoot.appendChild(hero.content.cloneNode(true));
    }
  }

  // let the browser know about the custom element
  customElements.define("hero-component", HeroMenu);
