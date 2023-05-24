const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let result = 0;

const A = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);
