"use strict";
import * as tides from "../js/tides.js";

describe('the object tides', function(){

  it('should say hello', function(){
    chai.expect(tides.getHello() === "hello");
  });

});