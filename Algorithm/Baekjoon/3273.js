const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const sum = +input.pop();
const numbers = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;

let p1 = 0;
let p2 = numbers.length - 1;

while (p1 !== p2) {
  if (numbers[p1] + numbers[p2] === sum) {
    result++;
    p1++;
  } else if (numbers[p1] + numbers[p2] > sum) {
    p2--;
  } else {
    p1++;
  }
}

console.log(result);
