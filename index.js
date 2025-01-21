import { nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
// import { showSlides } from "./slideShow";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${nav(store.nav)}
      ${main(state)}
      ${footer()}
    `;

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

        // const timeline = gsap.timeline();
        // timeline.from("container span", 1.5{
        //   delay: .5
        // })
        // break;
      // Add a case for each view that needs data from an API
      case "artTracker":

        axios
          .get(`${process.env.TRACKER_API_URL}/trackers`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            // console.log("response", store.tracker.trackers);
            store.artTracker.trackers = response.data;
            console.log("response", store.artTracker.trackers);
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
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      case "home":
        let slideIndex = 1;
        // Next/previous controls
        function plusSlides(n) {
          showSlides((slideIndex += n));
        }

        // Thumbnail image controls
        function currentSlide() {
          let dots = document.querySelectorAll(".dot");
          dots.forEach((element, i) => {
            dots.addEventListener("click", showSlides(slideIndex = i));
          });
          // showSlides((slideIndex = n));
        }

        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {
            slideIndex = 1;
          }
          if (n < 1) {
            slideIndex = slides.length;
          }
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].className += " active";
        }


        showSlides(slideIndex);

        let dots = document.querySelectorAll(".dot");
        console.log(dots);
        dots.forEach((element, i) => {
          element.addEventListener("click", (element) => { showSlides(slideIndex + i) });
          console.log("this happened too");
        });
      // ! Beginning of trackers axios call
      case "artTracker":
        // Add an event handler for the submit button on the form
        document.querySelector("#art-tracker-form").addEventListener("submit", event => {
          event.preventDefault();

          // Get the form element
          const inputList = event.target.elements;
          console.log("Input Element List", inputList);

          // Create an empty array to hold the toppings
          const difficulty = [];

          // Iterate over the toppings array

          for (let input of inputList.difficulty) {
            // If the value of the checked attribute is true then add the value to the toppings array
            if (input.checked) {
              difficulty.push(input.value);
            }
          }

          // Create a request body object to send to the API
          const requestData = {
            title: inputList.title.value,
            material: inputList.material.value,
            inspiration: inputList.inspiration.value,
            deadline: inputList.deadline.value,
            difficulty: inputList.difficulty.value,
            notes: inputList.notes.value
          };
          // Log the request body to the console
          console.log("request Body", requestData);

          axios
            // Make a POST request to the API to create a new pizza
            .post(`${process.env.TRACKER_API_URL}/trackers`, requestData)
            .then(response => {
            //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
              store.artTracker.trackers.push(response.data);
              router.navigate("/artTracker");
            })
            // If there is an error log it to the console
            .catch(error => {
              console.log("It puked", error);
            });
          });
    }
  }});

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
