const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);
let result = "";

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - input[i] - input[j] === 100) {
      result = input.filter((item) => item !== input[i] && item !== input[j]);
      break;
    }
  }
}

console.log(result.sort((a, b) => a - b).join("\n"));
