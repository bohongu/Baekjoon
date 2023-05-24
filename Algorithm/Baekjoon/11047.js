const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

let k = K,
  q,
  result = 0;

for (let i = N; i >= 1; i--) {
  q = Math.floor(k / input[i]);
  if (q === 0) {
    continue;
  }
  result += q;

  k %= input[i];
  if (k === 0) {
    break;
  }
}

console.log(result);
