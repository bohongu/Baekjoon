const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const first = input[0].split("");
const second = input[1].split("");
let result = 0;

for (let i = 0; i < first.length; i++) {
  for (let j = 0; j < second.length; j++) {
    if (first[i] === second[j]) {
      (first[i] = "FIRST"), (second[j] = "SECOND");
      result += 2;
      break;
    }
  }
}

console.log(first.length + second.length - result);
