const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

function solution(input) {
  const coatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (let i of coatian) {
    input = input.replaceAll(i, "x");
  }
  return input.length;
}

console.log(solution(input));
