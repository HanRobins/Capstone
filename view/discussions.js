import html from "html-literal";

export default state => html`
  <div class="discussions-page-body">
    <h1 class="director">POST A NEW DISCUSSION NOW</h1>
    <i class="fa-solid fa-angles-down arrows"></i>
    <main class="discussion-container">
      <h1 class="heading-discussion mogra-regular">
        <i class="fa-regular fa-heart"></i>Uprise & Design<i
          class="fa-regular fa-heart"
        ></i>
      </h1>
      <h3 class="heading-discussion trykker-regular">Post Discussion</h3>

      <form
        id="discussion-form"
        action="http://localhost:4040/discussions"
        method="POST"
        class="trykker-regular"
      >
        <div class="main-entry-dis">
          <div class="user-input-box-discussion">
            <label for="username" class="trykker-regular">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Me101"
              required
            />

            <label for="title" class="trykker-regular">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="I Like Art"
              required
            />

            <div class="trykker-regular message">
              <label for="message" class="trykker-regular">Message:</label>
              <textarea
                autofocus="autofocus"
                maxlength="70"
                name="message"
                id="message"
                placeholder="Character limit: 70"
                rows="6"
                cols="70"
              ></textarea>
            </div>
            <div class="trykker-regular form-submit-btn-discussion">
              <input
                name="submit"
                type="submit"
                value="Submit Discussion"
                id="submit-button"
                class="trykker-regular"
              />
            </div>
          </div>
        </div>
      </form>
    </main>

    <h1 class="director">VIEW DISCUSSIONS BELOW</h1>
    <i class="fa-solid fa-angles-down arrows"></i>
    <!-- <div class="discussions-body"> -->
    <div class="discussions">
      <div class="discussions-header">
        <h1 class="mogra-regular">DISCUSSIONS</h1>
      </div>
      <div class="outer-post">
        <div class="post-wrapper">
          ${state.discussions
            .map(discussion => {
              return `<div class="post"><div class="username"><i class="fa-solid fa-user"></i>${discussion.username}</div><div class="title">${discussion.title}</div><div class="dis-message">${discussion.message}<a href="/discussion?id=${discussion._id}" data-navigo class="reply-button" data-id="${discussion._id}"><p class="reply-num">${discussion.replies.length}</p><i class="fa-solid fa-reply"></i></a></div></div>`;
            })
            .join("")}
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
`;
