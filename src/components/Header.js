"use strict";
  class Header extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const header = document.createElement("template");
      const drawerStyles = document.createElement("link");
      const burgerStyles = document.createElement("link");

      drawerStyles.rel = "stylesheet";
      drawerStyles.href = "../../public/styles/drawer.css";
      burgerStyles.rel = "stylesheet";
      burgerStyles.href = "../../public/styles/burger-menu.css";

      header.innerHTML = `
        <header class="header">
          <div></div>
          <img src="../public/assets/grFinal-log-single.svg" alt="logo" style="width: 50px;" loading="eager">
          <div class="burger" >
              <div class="burger__stripe burger__stripe__top"></div>
              <div class="burger__stripe burger__stripe__middle"></div>
              <div class="burger__stripe burger__stripe__bottom"></div>
          </div>
          <div class=" drawer__menu">
              <div class="drawer__bg"></div>
              <ul class="drawer__list">
                  <li class="drawer__item"><a href="/index.html" class="drawer__link">Home</a></li>
                  <li class="drawer__item"><a href="#about" class="drawer__link">About</a></li>
                  <li class="drawer__item"><a href="#myWork" class="drawer__link">myWork</a></li>
                  <li class="drawer__item"><a href="#footer" class="drawer__link">Contact</a></li>
              </ul>
          </div>

        </header>
      `;
      const clone = header.content.cloneNode(true);
      shadow.appendChild(clone);
      shadow.appendChild(burgerStyles);
      shadow.appendChild(drawerStyles);
    }
    // A getter/setter for an open property.
    get open() {
      return this.hasAttribute("open");
    }

    set open(val) {
      // Reflect the value of the open property as an HTML attribute.
      if (val) {
        this.setAttribute("open", "");
      } else {
        this.removeAttribute("open");
      }
      this.toggleDrawer();
    }
    connectedCallback() {

      this.shadowRoot.querySelector(".burger").addEventListener("click", () => {
        this.toggleAttribute("open");
      });
      this.shadowRoot
        .querySelector(".drawer__list")
        .addEventListener("click", () => {
          this.toggleAttribute("open");
        });
      this.shadowRoot
        .querySelector(".drawer__bg")
        .addEventListener("click", () => {
          this.toggleAttribute("open");
        });
    }

    static get observedAttributes() {
      return ["open"];
    }
    burgerToggle() {
      let burger = this.shadowRoot.querySelector(".burger");
      let drawerList = this.shadowRoot.querySelector(".drawer__list");
      let drawerMenuBg = this.shadowRoot.querySelector(".drawer__bg");
      console.log(burger);
      burger.classList.toggle("on");
      burger.classList.toggle("floatMenu");
      if (burger.classList.value.includes("on")) {
        burger.classList.remove("floatMenu");
      }
      drawerList.classList.toggle("open");
      drawerMenuBg.classList.toggle("open");
      // drawerMenu.classList.toggle("open");
      document.querySelector("html").style.overflow = "hidden";
      window.scrollY == 0 && burger.classList.remove("floatMenu");
    }
    attributeChangedCallback(name, oldValue, newValue) {
      // if (oldValue === newValue) {
      //   return;
      // }
      this.burgerToggle()
      console.log(name, oldValue, newValue);
      console.log(`The attribute ${name} has changed to ${newValue}`);
    }


  };
  customElements.define("header-component", Header);