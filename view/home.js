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

    <!-- Slideshow container -->
    <div class="slideshow-wrapper">
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src=${promptImg2} style="width:100%" />
          <div class="text">${state.prompt}</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src=${promptImg2} style="width:100%" />
          <div class="text">${state.prompt}</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src=${promptImg} style="width:100%" />
          <div class="text">${state.prompt}</div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </div>
    <br />

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <!-- <section class="slide-container">
      <div class="slide-wrapper">
        <h3>PROMPT OF DAY</h3>
        <h2>${state.prompt}</h2>
        //I'm working on my slider I know its broken :D
        <div class="slider">
          <img id="slide-1" src="${promptImg2}" alt="img 1" />
          <img id="slide-2" src="${promptImg2}" alt="img 2" />
          <img id="slide-3" src="${promptImg}" alt="img 3" />
        </div>
        <div class="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>
    </section> -->
    <section class="info-grid">
      <h3>What We Do Here</h3>
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
