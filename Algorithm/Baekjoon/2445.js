const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

let result = "";
for (let i = 1; i < input; i++) {
  result = "*".repeat(i) + " ".repeat(2 * input - 2 * i) + "*".repeat(i);
  console.log(result);
}

for (let i = input; i > 0; i--) {
  result = "*".repeat(i) + " ".repeat(2 * input - 2 * i) + "*".repeat(i);
  console.log(result);
}
