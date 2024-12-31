import html from "html-literal";
import HeroImg from "../ContactUs/HeroHeader.jpg";
import promptImg from "../ContactUs/Prompt-BG.jpg";

export default () => html`
  <div class="home-body">
    <section class="hero-header">
      <h1 class="mogra-regular">
        UPRISE & <span class="mogra-regular">DESIGN</span>
      </h1>
      <h3>Get rid of art block now!</h3>
      <a id="hero-button" href="#" class="mogra-regular">INSPIRE</a>
    </section>
    <main>
      <div class="prompt-of-day">
        <img src="${promptImg}" alt="" width="100%" height="auto" />
        <h3>PROMPT OF THE DAY</h3>
      </div>
    </main>
  </div>
`;
