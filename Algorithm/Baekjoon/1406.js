const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const str = input.shift();
const M = +input.shift();
const left = [];
const right = [];

for (let i of str) {
  left.push(i);
}

for (let i = 0; i < M; i++) {
  const command = input[i].split(" ")[0];
  const value = input[i].split(" ")[1];
  if (command === "L") {
    if (left.length === 0) {
      continue;
    }
    right.push(left.pop());
  } else if (command === "D") {
    if (right.length === 0) {
      continue;
    }
    left.push(right.pop());
  } else if (command === "B") {
    if (left.length === 0) {
      continue;
    }
    left.pop();
  } else if (command === "P") {
    left.push(value);
  }
}

while (right.length) {
  left.push(right.pop());
}
console.log(left.join(""));
