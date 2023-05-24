const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const result = [];
result.push(input[0][0]);

for (let i = 0; i < input[0].length - 1; i++) {
  if (input[0][i] === input[0][i + 1]) {
    continue;
  } else {
    result.push(input[0][i + 1]);
  }
}

console.log(Math.floor(result.length / 2));
