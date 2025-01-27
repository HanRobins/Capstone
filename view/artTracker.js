import html from "html-literal";

export default state => html`
  <div class="art-tracker-body">
    <div class="tracker-header">
      <h1 class="mogra-regular">
        UPRISE & <span class="mogra-regular">DESIGN</span>
      </h1>
      <h3>Start your art tracking journey!</h3>
      <i class="fa-solid fa-angles-down"></i>
    </div>
    <div class="table-container">
      <main class="table">
        <section class="table-header">
          <h1 class="mogra-regular">Art Goals</h1>
        </section>
        <section class="table-body trykker-regular">
          <table>
            <thead>
              <tr>
                <th class="trykker-regular">Title</th>
                <th class="trykker-regular">Material</th>
                <th class="trykker-regular">Inspiration</th>
                <th class="trykker-regular">Deadline</th>
                <th class="trykker-regular">Difficulty</th>
                <th class="trykker-regular">Extra Thoughts</th>
              </tr>
            </thead>
            <tbody>
              ${state.trackers
                .map(tracker => {
                  return `<tr><td>${tracker.title}</td><td>${tracker.material}</td><td>${tracker.inspiration}</td><td class="active">${tracker.deadline}</td><td>${tracker.difficulty}</td><td>${tracker.notes}</td></tr>`;
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
          <h1 class="heading-tracker mogra-regular">
            <i class="fa-regular fa-heart"></i>Uprise & Design<i
              class="fa-regular fa-heart"
            ></i>
          </h1>
          <h3 class="heading-tracker trykker-regular">Art Tracker</h3>

          <form
            id="art-tracker-form"
            action="http://localhost:4040/trackers"
            method="POST"
            class="trykker-regular"
          >
            <div class="main-entry">
              <div class="user-input-box-tracker">
                <label for="title" class="trykker-regular"
                  >Art Piece Title:</label
                >
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="NightFall"
                  required
                />

                <label for="material" class="trykker-regular">Material:</label>
                <input
                  type="text"
                  name="material"
                  id="material"
                  placeholder="Markers"
                  required
                />

                <label for="inspiration" class="trykker-regular"
                  >Inspiration:</label
                >
                <input
                  type="text"
                  name="inspiration"
                  id="inspiration"
                  placeholder="A butterfly I saw"
                />

                <label for="deadline" class="trykker-regular">Deadline:</label>
                <input type="date" name="deadline" id="deadline" />

                <div class="drop-down-difficulty">
                  <label for="difficulty" class="trykker-regular"
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
                <div class="trykker-regular message">
                  <label for="notes" class="trykker-regular"
                    >Extra Thoughts:</label
                  >
                  <textarea
                    autofocus="autofocus"
                    maxlength="70"
                    name="notes"
                    id="notes"
                    placeholder="Character limit: 70"
                    rows="10"
                    cols="70"
                  ></textarea>
                </div>
                <div class="trykker-regular form-submit-btn-tracker">
                  <input
                    name="submit"
                    type="submit"
                    value="Submit Tracker"
                    id="submit-button"
                    class="trykker-regular"
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
