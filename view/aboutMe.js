import html from "html-literal";
import selfImg from "../ContactUs/Image-Self.jpg";

export default () => html`
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
            <a href="428328539083767829" target="_blank"
              ><i class="fa-brands fa-discord"></i
            ></a>
          </li>
          <li>
            <a href="428328539083767829" target="_blank"
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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            magni. Accusamus, modi placeat aut esse, itaque reprehenderit
            officiis officia, ea error velit excepturi totam vitae qui repellat
            dignissimos sunt deserunt.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            magni. Accusamus, modi placeat aut esse,
          </p>
        </div>
      </div>
    </div>
  </div>

  <section class="gallery">
    <h1 class="mogra-regular">MY ART GALLERY</h1>
    <div class="my-art">
      <img src="" />
      <img src="" />
      <img src="" />
      <img src="" />
      <img src="" />
      <img src="" />
      <img src="" />
    </div>
  </section>
`;
