  "use strict";

  class Footer extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      this.copyright = document.querySelector(".copyright");

      // creating a container for the editable-list component
      const footer = document.createElement("template");
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = "../../public/styles/footer.css";
      footer.innerHTML = `
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
        <footer class="footer" id="footer">
          <ul class="footer__group" style="list-style-type: none">
            <li class="footer__item">
              <i class="fab fa-github"><a
                href="https://github.com/GonzRodriguez"
                class="footer__item-icon"
                target="_blank"
              >
                
              </a></i>
            </li>
            <li class="footer__item"><i class="fab fa-linkedin-in">
              <a
                href="https://www.linkedin.com/in/developer-gonzalo-grg/"
                target="_blank"
                class="footer__item-icon"
              >
                
              </a></i>
            </li>
            <li class="footer__item">
                <i class="fab fa-instagram" size="5">
                <a
                href="https://www.instagram.com/gonz_rgs/"
                target="_blank"
                class="footer__item-icon"
              ></a>
              </i>
              
            </li>
          </ul>
          <h5>
            <a href="mailto:grgsalamanca@gmail.com" class="footer__email">
              grgsalamanca@gmail.com
            </a>
          </h5>
          <div class="polygone__circle-lg"></div>
          <div class="polygone__circle-md"></div>
          <div class="polygone__circle-sm"></div>
          <div class="copyright">
            <p>Copyright ⓒ &nbsp;</p>
          </div>
      </footer>
      `;
      shadowRoot.appendChild(styles);
      // appending the container to the shadow DOM
      shadowRoot.appendChild(footer.content.cloneNode(true));
    }
    addYearToCopy() {
      const year = new Date().getFullYear();
      const span = document.createElement("span");
      span.innerText = year;
      this.copyright.appendChild(span);
    };

  }
  // Footer.addYearToCopy();
  // let the browser know about the custom element
  customElements.define("footer-component", Footer);
