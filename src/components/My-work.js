"use strict";

class MyWork extends HTMLElement {
  constructor() {
    // establish prototype chain
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    // creating a container for the editable-list component
    const myWork = document.createElement("template");
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = "../../public/styles/my-work.css";

    // get attribute values from getters

    // adding a class to our container for the sake of clarity
    // myWork.classList.add("editable-list");
    // creating the inner HTML of the editable list element
    myWork.innerHTML = `
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
      <h2>Projects</h2>
      <div></div>
      <div class="myWork__item" id="left-column"  style="background-color: azure; color: black ;padding:0 3rem 3rem ;">
        <div class="myWork__item__cover">
          <h5>Bao Gallery </h5>
          <img loading="lazy" src="public/assets/bao-cover.png"  alt="cover">
          <!-- <div class="divider hidden"></div> -->
          <div class="myWork__item__description">
                  <div class="tools__icons">
                      <ul class="tools__icons__group">
                          <li class="tools__icons__item">
                              <i class="fab fa-css3-alt"></i>
                              <!-- <p>CSS3</p> -->
                          </li>
                          <li class="tools__icons__item">
                              <i class="fab fa-html5"></i>
                              <!-- <p>HTML5</p> -->
                          </li>
                          <li class="tools__icons__item">
                              <i class="fab fa-js"></i>
                              <!-- <p>Javascript</p> -->
                          </li>
                          <li class="tools__icons__item">
                              <i class="fab fa-node-js"></i>
                              <!-- <p>Nodejs</p> -->
                          </li>
                          <li class="tools__icons__item">
                              <i class="fas fa-database"></i>
                              <!-- <p>MongoDB</p> -->
                          </li>
                          <li class="tools__icons__item">
                              <i class="fab fa-react"></i>
                              <!-- <p>Reactjs</p> -->
                          </li>
                      </ul>
                  </div>
              <h6>The Bao Gallery is a marketplace with a multi-vendor system where the photographers are able to share their pictures and get paid
              for it. </h6>
              <button class="myWork__item__description__open-button more">MORE</button>
          </div>
        </div>
          <ul class="myWork__item__more-info__group hidden">
              <div class="divider"></div>
              <li class="myWork__item__more-info__item">
                  <img loading="lazy" src="public/assets/bao-home.png" alt="home">
                  <h6>Once the picture is uploaded, the potential customer is able to find the author, the collection or the picture itself by using mongoDB fuzzy searching. <br>I used react, metrial-ui and figma to style the whole webpage.</h6>
              </li>
              <div class="divider"></div>
              <li class="myWork__item__more-info__item">
                  <img loading="lazy" src="public/assets/bao-login.png" alt="login">
                  <h6>Users authentication is done with JWT. I store an access token un the database and send refresh token to client in order to get verify every 10 minutes and generate a new acces token.</h6>

              </li>
              <div class="divider"></div>
              <li class="myWork__item__more-info__item">
                  <img loading="lazy" src="public/assets/bao-dashboard.png" alt="dashboard">
                  <h6>Un finished dashboard where the vendor is able to manage his or her account. Update personal details, manage stripe accounts, see statistics and more.</h6>
              
              </li>
              <div class="divider"></div>
              <li class="myWork__item__more-info__item">
                  <img loading="lazy" src="public/assets/bao-uplaod.png" alt="upload">
                  <h6>I use nodejs in the backend to handle all the uploads and store the photographs in the server using different npm packages.</h6>
              
              </li>
          </ul>
          <div class="myWork__item__buttons">
              <a href="https://github.com/GonzRodriguez/blog-project" target="_blank"
                  class="myWork__item__code__button">SEE THE CODE</a>
          </div>
        </div>
    <div class="myWork__item" id="right-column" style="background-color: var(--clr-pri); padding:0 3rem 3rem ;">
        <div class="myWork__item__cover">
            
            <a href="https://enterium.myWorkkuapp.com/" target="_blank">
            <h5>Enterium </h5>
            </a>
            <img loading="lazy" src="public/assets/ENTERIUM-LOGO.png">
            <!-- <div class="divider hidden"></div> -->
            <div class="myWork__item__description">
                    <div class="tools__icons">
                        <ul class="tools__icons__group">
                            <li class="tools__icons__item">
                                <i class="fab fa-css3-alt"></i>
                                <!-- <p>CSS3</p> -->
                            </li>
                            <li class="tools__icons__item">
                                <i class="fab fa-html5"></i>
                                <!-- <p>HTML5</p> -->
                            </li>
                            <li class="tools__icons__item">
                                <i class="fab fa-js"></i>
                                <!-- <p>Javascript</p> -->
                            </li>
                            <li class="tools__icons__item">
                                <i class="fab fa-node-js"></i>
                                <!-- <p>Nodejs</p> -->
                            </li>
                            <li class="tools__icons__item">
                                <i class="fas fa-database"></i>
                                <!-- <p>MongoDB</p> -->
                            </li>
                            <li class="tools__icons__item" style="width: 17px; padding-inline: unset; margin-inline: 0 5px;">
                                <i style="font-size: 1rem;"><%</i>
                                <!-- <p>Reactjs</p> -->
                            </li>
                        </ul>
                    </div>
                <h6> Blog inspired in medium.com with authentication users system, post creation, deletion and update. </h6>
                <button class="myWork__item__description__open-button more">MORE</button>
            </div>
        </div>
        <ul class="myWork__item__more-info__group hidden">
            <div class="divider"></div>
            <li class="myWork__item__more-info__item">
                <img loading="lazy" src="public/assets/enterium-create-post.png" alt="compose">
                <h6>Create a post and save it in the database. All the post will be shown in the home and profile page using
                    ejs.</h6>
            </li>
            <div class="divider"></div>
            <li class="myWork__item__more-info__item">
                <img loading="lazy" src="public/assets/enterium-profile.png" alt="profile">
                <h6>Once the user is authenticated with passport, will be redirected to the profile page. In this page the
                    user will be able to create, update and delete post and see his/her last posts.</h6>
            </li>
        </ul>
        <div class="myWork__item__buttons">
            <a href="https://github.com/GonzRodriguez/blog-project" target="_blank" class="myWork__item__code__button">SEE THE CODE </a>
            <a href="https://enterium.myWorkkuapp.com/" target="_blank" class="myWork__item__description__open-button">WEB PAGE</a>

        </div>
            
    </div>
    <div class="myWork__item" id="left-column" style="background-color: var(--clr-pri-light );padding:0 3rem 3rem ;color: white;">
        <div class="myWork__item__cover">
            <h5>This Portfolio</h5>
            <img loading="lazy" src="public/assets/this-portfolio.jpg">
            <div class="myWork__item__description">
                <div class="tools__icons">
                    <ul class="tools__icons__group">
                        <li class="tools__icons__item">
                            <i class="fab fa-css3-alt"></i>
                            <!-- <p>CSS3</p> -->
                        </li>
                        <li class="tools__icons__item">
                            <i class="fab fa-html5"></i>
                            <!-- <p>HTML5</p> -->
                        </li>
                        <li class="tools__icons__item">
                            <i class="fab fa-js"></i>
                            <!-- <p>Javascript</p> -->
                        </li>
                    </ul>
                </div><h6>Pure HTML, CSS and Javascript has being used to make this portfolio and deployed with netlify.</h6>
            </div>
          <div class="myWork__item__buttons">
              <a href="https://github.com/GonzRodriguez/portfolio" target="_blank" class="myWork__item__code__button">SEE THE CODE</a>
          </div>
        </div>  
    </div>  
      <div class="myWork__item" id="right-column" style="background-color: white; color: black; padding:0 3rem 3rem" >
          <h5>Reactive notes </h5>
          <img loading="lazy" src="public/assets/Reactive Notes.png">          
          <div class="myWork__item__description">
              <div class="tools__icons">
                  <ul class="tools__icons__group">
                      <li class="tools__icons__item">
                          <i class="fab fa-css3-alt"></i>
                          <!-- <p>CSS3</p> -->
                      </li>
                      <li class="tools__icons__item">
                          <i class="fab fa-html5"></i>
                          <!-- <p>HTML5</p> -->
                      </li>
                      <li class="tools__icons__item">
                          <i class="fab fa-js"></i>
                          <!-- <p>Javascript</p> -->
                      </li>
                      <li class="tools__icons__item">
                          <i class="fab fa-react"></i>
                          <!-- <p>Reactjs</p> -->
                      </li>
                  </ul>
              </div><h6>Bootcamp project using react. Very simple app where we applied everything we learned myWork reactivity and state management.</h6>
          </div>
          <div class="myWork__item__buttons">
              <a href="https://codesandbox.io/s/reactive-notes-x9c43" target="_blank" class="myWork__item__code__button" >SEE THE SANDBOX</a>
          </div>
      </div>
      <div class="myWork__item" id="left-column" style="background-color: var(--clr-pri); padding:0 3rem 3rem ;" >
          <h5>Drum kit</h5>
          <img loading="lazy" src="public/assets/drum.svg">
          <div class="myWork__item__description">
              <div class="tools__icons">
                  <ul class="tools__icons__group">
                      <li class="tools__icons__item">
                          <i class="fab fa-css3-alt"></i>
                          <!-- <p>CSS3</p> -->
                      </li>
                      <li class="tools__icons__item">
                          <i class="fab fa-html5"></i>
                          <!-- <p>HTML5</p> -->
                      </li>
                      <li class="tools__icons__item">
                          <i class="fab fa-js"></i>
                          <!-- <p>Javascript</p> -->
                      </li>

                  </ul>
              </div><h6>Simple web app using CSS, HTML and Javascript only, made through the bootcamp course</h6>
          <div class="myWork__item__buttons">
              <a href="https://codesandbox.io/s/drum-soundboard-ksmlf?file=/src/index.js" target="_blank" class="myWork__item__code__button">SEE THE SANDBOX</a>
          </div>
      </div>
  </div>
      `;
    shadowRoot.appendChild(styles);
    // appending the container to the shadow DOM
    shadowRoot.appendChild(myWork.content.cloneNode(true));
  }
}

// let the browser know about the custom element
customElements.define("my-work-component", MyWork);
