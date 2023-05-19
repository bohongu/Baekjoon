const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const result = Array.from({ length: alphabet.length }, () => 0);

input.forEach((i) => result[alphabet.indexOf(i)]++);

console.log(result.join(" "));
