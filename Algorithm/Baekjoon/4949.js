const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const result = [];

for (let text of input) {
  const stack = [];
  let flag = false;
  if (text === ".") break;
  for (let char of text) {
    if (char === "(" || char === "[") stack.push(char);
    else if (char === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        flag = true;
        break;
      } else stack.pop();
    } else if (char === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        flag = true;
        break;
      } else stack.pop();
    }
  }
  if (stack.length !== 0 || flag === true) {
    result.push("no");
  } else {
    result.push("yes");
  }
}

console.log(result.join("\n"));
