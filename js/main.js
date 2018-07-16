"use strict";

import * as tides from "./tides.js";

var anumber = 2;
var anothernumber = 4;

console.log(anumber + anothernumber);

// $("This is a test").text('Hello Jon!');
// $('h1:contains("This is a test")').text('Hello Jon!');

$('#customH1').text(tides.getHello());