const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split("\n");

const N = input[0];

const stack = [];
const result = [];

for (let i = 1; i <= N; i++) {
  switch (input[i].split(" ")[0].trim()) {
    case "push":
      stack.push(input[i].split(" ")[1].trim());
      break;
    case "pop":
      result.push(stack.pop() || -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;
    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;
  }
}

console.log(result.join("\n"));
