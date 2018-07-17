"use strict";
//not yet working
import * as currents from "../js/currents.js";

//copied & pasted from tides-test.js
describe('the object currents', function(){

  it('should say coucou', function(){
    chai.expect(currents.getCoucou() === "coucou");
  });

});