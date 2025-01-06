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
    <section class="slide-container">
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
    </section>
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
