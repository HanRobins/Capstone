import html from "html-literal";
import HeroImg from "../GraveYard/HeroHeader.jpg";
import promptImg from "../GraveYard/Prompt-BG.jpg";
import promptImg2 from "../GraveYard/ImgSlider2.jpg";
import promptImg3 from "../GraveYard/paint-splash.jpg";
import promptImg4 from "../GraveYard/paint-hands.jpg";
import promptImg5 from "../GraveYard/hands.jpg";
import promptImg6 from "../GraveYard/fishy.jpg";
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

    <h3 class="prompt-header">PROMPT OF THE DAY</h3>
    <div class ="slide-container">
      <h1>${state.prompt[0]}</h1>
      <div class="slider">

        <div class="list">
          <div class="item">
            <img src="${promptImg2}">

          </div>
          <div class="item">
            <img src="${promptImg6}">

          </div>
          <div class="item">
            <img src="${promptImg3}">

          </div>
          <div class="item">
            <img src="${promptImg4}">

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

    <section class="info-grid">
      <h3>What We Do Here</h3>
      <div class="grid-wrapper">
        <div class="box">
          <h2 class="mogra-regular">Inspiration</h2>
          <p class="hidden">She did it knowing it was wrong —
            knowing he wouldn't do as he promised, that her work was useless,
            that he was going to kill again anyway.
            I always felt a connection with you.
            This could become a problem.</p>
          <img scr="${promptImg}"></img>
        </div>
        <div class="box">
          <h2 class="mogra-regular">Goals</h2>
          <p class="hidden">She did it knowing it was wrong —
            knowing he wouldn't do as he promised, that her work was useless,
            that he was going to kill again anyway.
            I always felt a connection with you.
            This could become a problem.</p>
          <img scr="${promptImg}"></img>
        </div>
        <div class="box">
          <h2 class="mogra-regular">Discuss</h2>
          <p class="hidden">She did it knowing it was wrong —
            knowing he wouldn't do as he promised, that her work was useless,
            that he was going to kill again anyway.
            I always felt a connection with you.
            This could become a problem.</p>
          <img scr="${promptImg}"></img>
        </div>
        <div class="box">
          <h2 class="mogra-regular">Values</h2>
          <p class="hidden">She did it knowing it was wrong —
            knowing he wouldn't do as he promised, that her work was useless,
            that he was going to kill again anyway.
            I always felt a connection with you.
            This could become a problem.</p>
          <img scr="${promptImg}"></img>
        </div>
      </div>
    </section>
    <div class="ending-text">
      <h1>Click On Art Tracker to Get Started</h1>
    </div>
  </div>
`;
