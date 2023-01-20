const findMissingLetter = require("./findMissingLetter.js")
test("FindMissingLetterTests", () => {
    expect(findMissingLetter(['a','b','c','d','f'])).toEqual('e');
  });