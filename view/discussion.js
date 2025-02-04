import html from "html-literal";

export default state => html`
  <div class="reply-page">
    <div class="reply-text">
      <h1 class="reply-director">VIEW REPLIES</h1>
      <h1 class="reply-director">&</h1>
      <h1 class="reply-director">REPLY BELOW</h1>
    </div>

    <div class="reply-section">
      <div class="diss-username">
        <i class="fa-solid fa-user"></i>${state.discussion.username}
      </div>
      <div class="reply-title">${state.discussion.title}</div>
      <div class="reply-message">
        ${state.discussion.message}
        <!-- <a
        href="/discussion?id=${state.discussion._id}"
        data-navigo
        class="reply-button"
        data-id="${state.discussion._id}"
        ><i class="fa-solid fa-reply"></i
      ></a> -->
      </div>
      <div class="outer-reply">
        <div class="reply-wrapper">
          ${state.discussion.replies
            .map(reply => {
              return `<div class="reply"><div class="reply-username"><i class="fa-solid fa-user"></i>${reply.username}</div><div class="response">${reply.response}</div></div>`;
            })
            .join("")}
        </div>
      </div>
    </div>

    <main class="reply-container">
      <h1 class="heading-reply mogra-regular">
        <i class="fa-regular fa-heart"></i>Uprise & Design<i
          class="fa-regular fa-heart"
        ></i>
      </h1>
      <h3 class="heading-reply trykker-regular">Reply Now</h3>

      <form
        id="reply-form"
        action="http://localhost:4040/discussions"
        method="POST"
        class="trykker-regular"
      >
        <div class="main-entry-reply">
          <div class="user-input-box-reply">
            <label for="username" class="trykker-regular">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="NightFall"
              required
            />

            <div class="trykker-regular message">
              <label for="response" class="trykker-regular">Message:</label>
              <textarea
                autofocus="autofocus"
                maxlength="70"
                name="response"
                id="response"
                placeholder="Character limit: 70"
                rows="10"
                cols="70"
              ></textarea>
            </div>
            <div class="trykker-regular form-submit-btn-reply">
              <input
                name="submit"
                type="submit"
                value="Submit Reply"
                id="submit-button"
                class="trykker-regular"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
    <div class="reply-text-bottom">
      <h1 class="reply-director">Thanks For Visiting</h1>
    </div>
  </div>
`;
