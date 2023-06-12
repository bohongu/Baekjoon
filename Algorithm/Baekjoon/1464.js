const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = +fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const result = Array.from({ length: input + 1 }, () => 0);
result[2] = 1;
result[3] = 1;

for (let i = 4; i <= input; i++) {
  result[i] = result[i - 1] + 1;

  if (i % 3 === 0) {
    result[i] = Math.min(result[i], result[i / 3] + 1);
  }

  if (i % 2 === 0) {
    result[i] = Math.min(result[i], result[i / 2] + 1);
  }
}

console.log(result[input]);
