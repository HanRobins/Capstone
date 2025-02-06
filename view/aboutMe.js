import html from "html-literal";
import selfImg from "../GraveYard/Image-Self.jpg";
import ArtImg1 from "../GraveYard/ArtGallery/Art-img-1.png";
import ArtImg2 from "../GraveYard/ArtGallery/Art-img-2.jpg";
import ArtImg3 from "../GraveYard/ArtGallery/Art-img-3.jpg";
import ArtImg4 from "../GraveYard/ArtGallery/Art-img-4.jpg";
import ArtImg5 from "../GraveYard/ArtGallery/Art-img-5.jpg";
import ArtImg6 from "../GraveYard/ArtGallery/Art-img-6.jpg";
import ArtImg7 from "../GraveYard/ArtGallery/Art-img-7.png";
import ArtImg8 from "../GraveYard/ArtGallery/Art-img-8.png";
import ArtImg9 from "../GraveYard/ArtGallery/Art-img-9.jpg";
import ArtImg10 from "../GraveYard/ArtGallery/Art-img-10.png";
import ArtImg11 from "../GraveYard/ArtGallery/Art-img-11.png";
import ArtImg12 from "../GraveYard/ArtGallery/Art-img-12.png";
import ArtImg13 from "../GraveYard/ArtGallery/Art-img-13.png";
import ArtImg14 from "../GraveYard/ArtGallery/Art-img-14.png";

export default () => html`
  <div class="about-body">
    <div class="about-wrapper">
      <div class="about-left">
        <div class="about-left-content">
          <div>
            <div class="shadow">
              <div class="about-img">
                <img src="${selfImg}" alt="Portfolio photo of myself" />
              </div>
            </div>
            <h2>Hannah<br />Robinson</h2>
            <h3>Web Developer</h3>
          </div>
          <ul class="social-links">
            <li>
              <a href="https://github.com/HanRobins" target="_blank"
                ><i class="fa-brands fa-github"></i
              ></a>
            </li>
            <li>
              <a
                href="https://savvycoders.slack.com/team/U07Q8HADWSV"
                target="_blank"
                ><i class="fa-brands fa-slack"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hannah-robinson-b31427340/"
                target="_blank"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </li>
          </ul>
        </div>
        <div <div class="about-right">
          <h1>hi<span>!</span></h1>
          <h2 class="mogra-regular">Here's what I do</h2>
          <div class="about-btns">
            <button type="button" class="btn btn-pink">resume</button>
            <button type="button" class="btn btn-white">TBD</button>
          </div>
          <div class="about-para">
            <p class="trykker-regular">
              Hi, My name is Hannah Robinson. All my life I've has a profound
              love for art and design. I'm currently on my way to branch out
              into Web Development . The internet has always interested me. Now
              I get to blend my love for art and design with my love for web
              development.
            </p>
            <p class="trykker-regular">
              I hope to bring inspiration and the love for art to everyone in
              the world! Thank you for joining me on my journey!
              <i class="fa-regular fa-heart"></i>
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="gallery">
      <h1 class="mogra-regular">MY ART GALLERY</h1>
      <div class="my-art">
        <div class="column">
          <div class="art-photo">
            <img src="${ArtImg4}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg5}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg6}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg2}" />
          </div>
        </div>
        <div class="column">
          <div class="art-photo">
            <img src="${ArtImg1}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg7}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg8}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg9}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg13}" />
          </div>
        </div>
        <div class="column">
          <div class="art-photo">
            <img src="${ArtImg10}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg11}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg12}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg14}" />
          </div>
          <div class="art-photo">
            <img src="${ArtImg3}" />
          </div>
        </div>
      </div>
    </section>
  </div>
`;
