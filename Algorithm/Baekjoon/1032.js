const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();
let result = "";

for (let i = 0; i < input[0].trim().length; i++) {
  let flag = true;
  let char = input[0][i];
  for (let j = 0; j < input.length; j++) {
    if (char !== input[j][i]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    result += char;
  } else {
    result += "?";
  }
}

console.log(result);
