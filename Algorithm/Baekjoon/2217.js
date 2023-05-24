const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

let result = 0;

input.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  if (result < input[i] * (N - i)) {
    result = input[i] * (N - i);
  }
}

console.log(result);
