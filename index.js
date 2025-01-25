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
  before: async (done, match) => {
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
        // timeline.from("info-grid span" ,1.5,{
        //   delay: .5,
        //   skewX: -10,
        //   skew: 10,
        //   stagger: .4,
        //   y: 50,
        //   x: -20,
        //   opacity: 0

        //   });

        // gsap.timeline({
        //   scrollTrigger:{
        //     trigger:".info-grid span",
        //     start: "top top",
        //     scrub:1
        //   }
        // })
        break;
      // Add a case for each view that needs data from an API
      case "artTracker":

        await axios
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
      // ! TRYING NEW SLIDER CODE T-T
        let list = document.querySelector('.slider .list');
        let items = document.querySelectorAll('.slider .list .item');
        let dots = document.querySelectorAll('.slider .dots li');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');

        let active = 0;
        let lengthItems = items.length - 1;

        next.onclick = function(){
          console.log("ive been clicked");
          if(active + 1 > lengthItems){
            active = 0;
          } else {
            active = active + 1;
          }

          reloadSlider();
        }

        prev.onclick = function(){
          if(active - 1 < 0){
            active = lengthItems;

          }else{
            active = active - 1;
          }
          reloadSlider();
        }

        dots.forEach((li, key) => {
           li.addEventListener('click', function(){
            active = key;
            reloadSlider();
           })
        })

        let refreshSlider = setInterval(()=>{next.click()}, 5000);

        function reloadSlider(){
          let checkLeft = items[active].offsetLeft;
          list.style.left = -checkLeft + 'px';

          let lastActiveDot = document.querySelector('.slider .dots li.active');
          lastActiveDot.classList.remove('active');
          dots[active].classList.add('active');
          clearInterval(refreshSlider);
          refreshSlider = setInterval(()=>{next.click()}, 5000);
        }



      // ! Beginning of trackers axios call
      case "artTracker":
        // Add an event handler for the submit button on the form
        document.querySelector("#art-tracker-form").addEventListener("submit", event => {
          event.preventDefault();

          // Get the form element
          const inputList = event.target.elements;
          console.log("Input Element List", inputList);


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
