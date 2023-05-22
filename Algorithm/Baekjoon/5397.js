const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const value = input[i];
  const left = [];
  const right = [];
  for (let j of value) {
    if (j === "-") {
      if (left[left.length - 1]) {
        left.pop();
      }
    } else if (j === "<") {
      if (left[left.length - 1]) {
        right.push(left.pop());
      }
    } else if (j === ">") {
      if (right[right.length - 1]) {
        left.push(right.pop());
      }
    } else {
      left.push(j);
    }
  }
  while (right.length) {
    left.push(right.pop());
  }
  console.log(left.join(""));
}
