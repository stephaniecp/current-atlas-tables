"use strict";
import * as tides from "../js/tides.js";

describe('the object tides', function(){

    it('should say hello', function () {
      chai.expect(tides.getHello() === "hello");
    });

    it('should have the expected properties', function(){
      const nowConditions = tides.getAtkinsonPtTideNow();
      chai.expect(nowConditions).to.have.property('tideLevel');
      chai.expect(nowConditions).to.have.property('tideRange');
      chai.expect(nowConditions).to.have.property('tideTendency');
    });

});