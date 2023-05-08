const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let total = 0;
for (let i = 0; i < input.length; i++) {
  const score = +input[i].split(" ")[1].trim();
  const grade = input[i].split(" ")[2].trim();
  switch (grade) {
    case "A+":
      sum += score * 4.5;
      total += score;
      break;
    case "A0":
      sum += score * 4.0;
      total += score;
      break;
    case "B+":
      sum += score * 3.5;
      total += score;
      break;
    case "B0":
      sum += score * 3.0;
      total += score;
      break;
    case "C+":
      sum += score * 2.5;
      total += score;
      break;
    case "C0":
      sum += score * 2.0;
      total += score;
      break;
    case "D+":
      sum += score * 1.5;
      total += score;
      break;
    case "D0":
      sum += score * 1.0;
      total += score;
      break;
    case "F":
      sum += score * 0;
      total += score;
      break;
    case "P":
      break;
  }
}

console.log((sum / total).toFixed(6));
