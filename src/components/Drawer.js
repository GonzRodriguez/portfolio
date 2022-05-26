"use strict";



  class Drawer extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();

      const shadow = this.attachShadow({ mode: "open" });

      // creating a container for the editable-list component
      const drawer = document.createElement("template");
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = "../../public/styles/drawer.css";

      // get attribute values from getters

      // adding a class to our container for the sake of clarity
      drawer.classList.add("drawer__menu");

      // creating the inner HTML of the editable list element
      drawer.innerHTML = `
        <style>
          ${styles}
        </style>
          <div class="drawer__layout">
              <div class="drawer__bg" onclick="burgerToggle()"></div>
              <ul class="drawer__list" onclick="burgerToggle()">
                  <li class="drawer__item"><a href="#home" class="drawer__link">Home</a></li>
                  <li class="drawer__item"><a href="#about" class="drawer__link">About</a></li>
                  <li class="drawer__item"><a href="#myWork" class="drawer__link">myWork</a></li>
                  <li class="drawer__item"><a href="#footer" class="drawer__link">Contact</a></li>
              </ul>
          </div>
      `;

      // appending the container to the shadow DOM
      shadow.appendChild(drawer);
    }

  }

  // let the browser know about the custom element
  window.customElements.define("drawer-component", Drawer);
