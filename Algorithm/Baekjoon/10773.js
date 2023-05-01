const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split("\n");

const K = parseInt(input[0]);
const stack = [];
let answer = 0;

for (let i = 1; i <= K; i++) {
  const value = parseInt(input[i]);
  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}

for (let i of stack) {
  answer += i;
}

console.log(answer);
