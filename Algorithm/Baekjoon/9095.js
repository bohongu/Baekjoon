const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = +input.shift();
const dp = Array.from({ length: 11 });
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < dp.length; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(dp[input[i]]);
}
