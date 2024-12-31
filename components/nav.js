import html from "html-literal";

import navItem from "./navItem.js";

export default navItems => html`
  <header class="header">
    <a href="#" class="Logo mogra-regular">Uprise & Design</a>
    <input type="checkbox" id="check" />
    <label for="check" class="icons">
      <i class="fa-solid fa-bars fa-2x" id="menu-icon"></i>
      <i class="fa-solid fa-x fa-2x" id="close-icon"></i>
    </label>

    <nav class="navbar">
      <!-- <a href="HomePage.html" style="--i:0;">Home</a>
      <a href="#" style="--i:1;">Art Tracker</a>
      <a href="#" style="--i:2;">Discussions</a>
      <a href="ContactUs.html" style="--i:3;">Contact Us</a>
      <a href="AboutMe.html" style="--i:4;">About</a> -->
      ${navItems.map(item => navItem(item)).join("")}
    </nav>
  </header>
`;
