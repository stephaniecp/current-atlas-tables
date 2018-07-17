"use strict";
import * as tides from "tides.js";


// copied & pasted from tides.js + changed "hello" for "coucou"
  export function getCoucou() {
    return "coucou";
  };

  export function getCurrentLookupPageForConditions(conditions){
  }

  export function getCurrentLookupPageForConditionsNow(){
    const conditions = tides.getAtkinsonPtTideNow();
    const currentAtlasPage = getCurrentLookupPageForConditions(conditions);
    return currentAtlasPage;
  }

// (function(currents) {
// })(module.exports);