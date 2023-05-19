const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

let result = "";
for (let i = 1; i <= input - 1; i++) {
  result = " ".repeat(input - i) + "*".repeat(2 * i - 1);
  console.log(result);
}

for (let i = input; i > 0; i--) {
  result = " ".repeat(input - i) + "*".repeat(2 * i - 1);
  console.log(result);
}
