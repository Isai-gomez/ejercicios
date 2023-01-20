export const persistence = (num) => {
  let times = 0;
  num = num.toString();
  while (num.length > 1) {
    times++;
    console.log(num.split("").map(Number));
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return times;
};
