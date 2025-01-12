import html from "html-literal";

export default () => html`
  <div class="tracker-header">
    <h1 class="mogra-regular">
      UPRISE & <span class="mogra-regular">DESIGN</span>
    </h1>
    <h3>Get rid of art block now!</h3>
    <a id="hero-button" href="/artTracker" class="mogra-regular">INSPIRE</a>
  </div>

  <div class="tracker-wrapper">
    <div class="tracker-body">
      <main class="tracker-container">
        <h1 class="heading-tracker mogra-regular">Uprise & Design</h1>
        <h3 class="heading-tracker">Contact Creator</h3>

        <form
          id="art-tracker-form"
          action=""
          method="post"
          class="lexend-justify"
        >
          <div class="main-entry">
            <div class="user-input-box">
              <label for="Art Piece Title" class="lexend-justify"
                >Art Piece Title:</label
              >
              <input
                type="text"
                name="Art Piece Title"
                id="Art Piece Title"
                placeholder="Enter First Name"
                required
              />

              <label for="Material" class="lexend-justify">Material:</label>
              <input
                type="text"
                name="Material"
                id="Material"
                placeholder="Enter Last Name"
                required
              />

              <label for="Inspiration" class="lexend-justify"
                >Inspiration:</label
              >
              <input
                type="text"
                name="Inspiration"
                id="Inspiration"
                placeholder="Example: emailme@email.com"
                required
              />

              <label for="Deadline" class="lexend-justify">Deadline:</label>
              <input
                type="date"
                name="Deadline"
                id="Deadline"
                placeholder=" Example: xxx-xxxx-xxxx"
              />

              <div class="drop-down">
                <label for="Difficulty" class="lexend-justify"
                  >Difficulty Level:</label
                >
                <select name="Difficulty" id="Difficulty">
                  <optgroup label="Difficulty">
                    <option value="Easy">Super Easy</option>
                    <option value="Medium">Not Very Easy</option>
                    <option value="Hard">Hard</option>
                  </optgroup>
                </select>
              </div>
              <div class="lexend-justify message">
                <label for="Extra Thoughts" class="lexend-justify"
                  >Extra Thoughts:</label
                >
                <textarea
                  name="extra-thoughts"
                  id="Extra Thoughts"
                  placeholder="Some additional information..."
                  rows="10"
                  cols="80"
                >
                </textarea>
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
  </div>
`;
