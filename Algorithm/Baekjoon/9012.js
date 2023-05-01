const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const cases = input[i];
  const stack = [];
  let answer = "YES";

  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        answer = "NO";
        break;
      }
    }
  }
  if (stack.length !== 0) {
    answer = "NO";
  }
  console.log(answer);
}
