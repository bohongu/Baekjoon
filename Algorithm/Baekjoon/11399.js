const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let wait = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  wait += arr[i];
  result += wait;
}

console.log(result);
