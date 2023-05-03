const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split("\n");

let numbers = input.map((number) => {
  return Number(number);
});

const maxValue = Math.max(...numbers);
console.log(maxValue);
console.log(numbers.indexOf(maxValue) + 1);
