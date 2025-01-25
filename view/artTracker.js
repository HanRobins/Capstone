import html from "html-literal";

export default state => html`
  <div class="art-tracker-body">
    <div class="tracker-header">
      <h1 class="mogra-regular">
        UPRISE & <span class="mogra-regular">DESIGN</span>
      </h1>
      <h3>Get rid of art block now!</h3>
      <a id="hero-button" href="/artTracker" class="mogra-regular">INSPIRE</a>
    </div>
    <div class="table-container">
      <main class="table">
        <section class="table-header">
          <h1>Art Goals</h1>
        </section>
        <section class="table-body">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Material</th>
                <th>Inspiration</th>
                <th>Deadline</th>
                <th>Difficulty</th>
                <th>Extra Thoughts</th>
              </tr>
            </thead>
            <tbody>
              ${state.trackers
                .map(tracker => {
                  return `<tr><td>${tracker.title}</td><td>${tracker.material}</td><td>${tracker.inspiration}</td><td>${tracker.deadline}</td><td>${tracker.difficulty}</td><td>${tracker.notes}</td></tr>`;
                })
                .join("")}
            </tbody>
          </table>
        </section>
      </main>
    </div>
    <div class="tracker-wrapper">
      <div class="tracker-body">
        <main class="tracker-container">
          <h1 class="heading-tracker mogra-regular">Uprise & Design</h1>
          <h3 class="heading-tracker">Art Tracker</h3>

          <form
            id="art-tracker-form"
            action="http://localhost:4040/trackers"
            method="POST"
            class="lexend-justify"
          >
            <div class="main-entry">
              <div class="user-input-box-tracker">
                <label for="title" class="lexend-justify"
                  >Art Piece Title:</label
                >
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="NightFall"
                  required
                />

                <label for="material" class="lexend-justify">Material:</label>
                <input
                  type="text"
                  name="material"
                  id="material"
                  placeholder="Markers"
                  required
                />

                <label for="inspiration" class="lexend-justify"
                  >Inspiration:</label
                >
                <input
                  type="text"
                  name="inspiration"
                  id="inspiration"
                  placeholder="A butterfly I saw"
                />

                <label for="deadline" class="lexend-justify">Deadline:</label>
                <input type="date" name="deadline" id="deadline" />

                <div class="drop-down-difficulty">
                  <label for="difficulty" class="lexend-justify"
                    >Difficulty Level:</label
                  >
                  <select name="difficulty" id="difficulty">
                    <optgroup label="difficulty">
                      <option value="Easy">Super Easy</option>
                      <option value="Medium">Not Very Easy</option>
                      <option value="Hard">Hard</option>
                    </optgroup>
                  </select>
                </div>
                <div class="lexend-justify message">
                  <label for="notes" class="lexend-justify"
                    >Extra Thoughts:</label
                  >
                  <textarea
                    autofocus="autofocus"
                    maxlength="70"
                    name="notes"
                    id="notes"
                    placeholder="Some additional information..."
                    rows="10"
                    cols="70"
                  >
                  </textarea>
                </div>
                <div class="lexend-justify form-submit-btn-tracker">
                  <input
                    name="submit"
                    type="submit"
                    value="Submit Tracker"
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
  </div>
`;
