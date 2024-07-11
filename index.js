/* This is a file inserted to keep the learn IDE browser happy */

   
let testVar = {};
require('./helpers.js');

describe ("index.js", () => {
  it("exists", () => {
    expect(testVar).to.exist;
    expect(testVar).to.deep.equal({}); 
  });
});


