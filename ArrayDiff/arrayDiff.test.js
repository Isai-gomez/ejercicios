const arrayDiff = require("./arrayDiff.js");
test("Saple tests", () => {
  expect(arrayDiff([], [4,5])).toEqual([]);
  expect(arrayDiff([3, 4], [3])).toEqual([4]);
  expect(arrayDiff([1, 8,2], [])).toEqual([1,8,2]);
  expect(arrayDiff([1, 2], [1])).toEqual([2]);
  expect(arrayDiff([1, 2,3], [1,2])).toEqual([3]);
});
