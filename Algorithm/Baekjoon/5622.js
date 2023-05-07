const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const dial = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};

let answer = 0;

for (let i of input) {
  for (let j = 3; j <= 10; j++) {
    if (dial[j].includes(i)) {
      answer += j;
      break;
    }
  }
}
console.log(answer);
