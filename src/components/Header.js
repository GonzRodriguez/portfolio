"use strict";

  class BurgerMenu extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();

      const shadow = this.attachShadow({ mode: "open" });

      // creating a container for the editable-list component
      const burger = document.createElement("template");
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = "../../public/styles/burger-menu.css";
      // get attribute values from getters

      // adding a class to our container for the sake of clarity
      // burger.classList.add("editable-list");

      // creating the inner HTML of the editable list element
      burger.innerHTML = `
    <header class="header">
        <img src="./assets/grFinal-log-single.svg" alt="logo" style="width: 8vh;" loading="eager">
        <div class="hamburger"  >
            <div class="burger__stripe burger__stripe__top"></div>
            <div class="burger__stripe burger__stripe__middle"></div>
            <div class="burger__stripe burger__stripe__bottom"></div>
        </div>
    </header>

      `;
      // appending the container to the shadow DOM
      shadow.appendChild(burger);
      shadow.appendChild(styles);
    }
  }

  // let the browser know about the custom element
customElements.define("burger-menu", BurgerMenu);
