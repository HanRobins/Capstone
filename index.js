import { nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";
import { gsap } from "gsap";
// import { showSlides } from "./slideShow";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${nav(store.nav)}
      ${main(state)}
      ${footer()}
    `;
  // switch (state){
  //   case store.home:
  //     showSlides(1);
  //     break;
  // }
}

router.hooks({
  before: (done, match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "home":


        //axios call
        axios
          .get(`${process.env.WORDS_PROMPTS_URL}`)
          .then(response => {
            // Storing retrieved data in state
            // The dot chain variable access represents the following {storeFolder.stateFileViewName.objectAttribute}
            store.home.prompt = response.data;
            console.log(response.data);
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    // const view = match?.data?.view ? camelCase(match.data.view) : "home";

    router.updatePageLinks();
    // let slideIndex = 1;
    // switch(view){

    //   case "home":
    //     showSlides(slideIndex);
    // }

  }
});

router
  .on({
    "/": () => render(),

    ":view": (match) => {
      // Change the :view data element to camel case and remove any dashes (support for multi-word views)
      const view = match?.data?.view ? camelCase(match.data.view) : "home";
      // Determine if the view name key exists in the store object
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();






// !creating animation transitions
// !im just working on it T-T
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show')
//     }
//   });
// });
// //getting hidden elements
// const hiddenItems = document.querySelectorAll('.hidden');
// //looping over hidden elements to eventually animate
// hiddenItems.forEach((el) => observer.observe(el));
