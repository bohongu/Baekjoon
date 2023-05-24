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

for (let i = N; i > 1; i--) {
  if (input[i - 1] <= input[i - 2]) {
    result += input[i - 2] - input[i - 1] + 1;
    input[i - 2] = input[i - 1] - 1;
  }
}

console.log(result);
