const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else {
    if (input[i - 1] === "(") {
      stack.pop();
      result += stack.length;
    } else {
      stack.pop();
      result++;
    }
  }
}

console.log(result);
