import html from "html-literal";
import HeroImg from "../GraveYard/HeroHeader.jpg";
import promptImg from "../GraveYard/Prompt-BG.jpg";
import promptImg2 from "../GraveYard/ImgSlider2.jpg";
// import promptImg3 from "../GraveYard/spray-paint.jpg";
export default state => html`
  <div class="home-body">
    <section class="hero-header">
      <h1 class="mogra-regular">
        UPRISE & <span class="mogra-regular">DESIGN</span>
      </h1>
      <h3>Get rid of art block now!</h3>
      <a id="hero-button" href="/artTracker" class="mogra-regular">INSPIRE</a>
    </section>

    <h3 class="prompt-header">PROMPT OF DAY</h3>
    <div class ="slide-container">
    <h1>${state.prompt[0]}</h1>
      <div class="slider">

        <div class="list">
          <div class="item">
            <img src="${promptImg2}">

          </div>
          <div class="item">
            <img src="${promptImg}">

          </div>
          <div class="item">
            <img src="${promptImg2}">

          </div>
          <div class="item">
            <img src="${promptImg}">

          </div>
        </div>

      <!-- creating previous and after buttons -->
        <div class="buttons">
          <button id="prev"><</button>
          <button id="next">></button>
        </div>

      <!--dots at bottom of slider-->
        <div class="dots">
          <li class ="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </div>

      </div>
    </div>
    <!-- Slideshow container -->
    <!-- <div class="slideshow-wrapper">
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <!--<div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src=${promptImg2} style="width:100%" />
          <div class="text">${state.prompt[0]}</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src=${promptImg2} style="width:100%" />
          <div class="text">${state.prompt}</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src=${promptImg} style="width:100%" />
          <div class="text">${state.prompt[0]}</div>
        </div>

        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </div>
    <br />


    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div> -->

    <section class="info-grid">
      <h3><span>What<span><span>We<span><span>Do<span><span>Here<span></h3>
      <div class="grid-wrapper">
        <p class="hidden">1</p>
        <p class="hidden">1</p>
        <p class="hidden">1</p>
        <p class="hidden">1</p>
      </div>
    </section>
    <div class="ending-text">
      <h1>Click On Art Tracker to Get Started</h1>
    </div>
  </div>
`;
