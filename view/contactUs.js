import html from "html-literal";
import bgImg from "../GraveYard/ContactUsDrawing.png";
export default () => html`
  <div class="contact-body">
    <main class="container">
      <h1 class="heading mogra-regular">Uprise & Design</h1>
      <h3 class="heading">Contact Creator</h3>

      <form id="contact-us-form" action="" method="post" class="lexend-justify">
        <div class="main-info">
          <div class="user-input-box">
            <label for="first-name" class="lexend-justify">First Name:</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Enter First Name"
              required
            />

            <label for="last-name" class="lexend-justify">Last Name:</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Enter Last Name"
              required
            />

            <label for="email" class="lexend-justify">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Example: emailme@email.com"
              required
            />

            <label for="P-number" class="lexend-justify">Phone Number:</label>
            <input
              type="tel"
              name="P-number"
              id="P-number"
              placeholder=" Example: xxx-xxxx-xxxx"
            />
            <div class="drop-down">
              <label for="marketing" class="lexend-justify"
                >How did you hear about me?</label
              >
              <select name="marketing" id="marketing">
                <optgroup label="Online">
                  <option value="social"
                    >Social Media (FB, Twitter, LinkedIn)</option
                  >
                  <option value="github">Online Portfolio (GitHub)</option>
                  <option value="search">Search Engine</option>
                </optgroup>
              </select>
            </div>
            <div class="lexend-justify message">
              <label for="contact-message" class="lexend-justify"
                >Reason For Contact:</label
              >
              <textarea
                name="contact-message"
                id="contact-message"
                placeholder="I contacted you for..."
                rows="10"
                cols="80"
              ></textarea>
            </div>
            <div class="lexend-justify form-submit-btn">
              <input
                type="submit"
                value="Submit"
                id="submit-button"
                class="lexend-justify"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
`;
