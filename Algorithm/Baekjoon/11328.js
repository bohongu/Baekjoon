const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < N; i++) {
  const compare1 = input[i].split(" ")[0];
  const compare2 = input[i].split(" ")[1];
  let arr = Array.from({ length: 26 }, () => 0);
  let flag = true;

  for (let j of compare1) {
    arr[alphabet.indexOf(j)]++;
  }
  for (let j of compare2) {
    arr[alphabet.indexOf(j)]--;
  }
  for (let j of arr) {
    if (arr[j] !== 0) {
      console.log("Impossible");
      flag = false;
      break;
    }
  }
  if (flag) console.log("Possible");
}
