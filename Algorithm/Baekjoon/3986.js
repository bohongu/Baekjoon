const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let result = 0;

for (let i = 0; i < N; i++) {
  const stack = [];
  const word = input[i];
  for (let j = 0; j < word.length; j++) {
    if (word[j] !== stack[stack.length - 1]) {
      stack.push(word[j]);
    } else {
      stack.pop();
    }
  }
  stack.length === 0 && result++;
}

console.log(result);
