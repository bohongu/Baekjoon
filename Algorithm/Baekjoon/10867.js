const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const numbers = input[0].split(" ").map(Number);
const set = new Set(numbers);

console.log([...set].sort((a, b) => a - b).join(" "));
