const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = +fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const dp = Array.from({ length: 91 }, () => 0);

dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= input; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(String(dp[input]));
