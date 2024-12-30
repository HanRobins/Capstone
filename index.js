import { nav, main, footer } from "./components";

import * as store from "./store";

import Navigo from "navigo";
import { camelCase } from "lodash";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${nav(store.nav)}
      ${main(state)}
      ${footer()}
    `;
    router.updatePageLinks();
}

render();

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
