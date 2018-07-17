"use strict";

import * as tides from "./tides.js";

// Not sure about where this should go, but I think that it should be about here
import * as currents from "./currents.js";

let anumber = 2;
let anothernumber = 4;

console.log(anumber + anothernumber);

console.log(currents.getCoucou());

// $("This is a test").text('Hello Jon!');
// $('h1:contains("This is a test")').text('Hello Jon!');

$('#customH1').text(tides.getHello());

