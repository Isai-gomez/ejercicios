module.exports = arrayDiff = (a, b) => {
  // your code goes here
  return a.filter((val) => !b.includes(val));
};
