const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("")
  .map(Number);

const arr = Array.from({ length: 11 }, () => 0);

for (let i of input) {
  if (i === 6 || i === 9) {
    arr[10] += 0.5;
  } else {
    arr[i]++;
  }
}

arr[10] = Math.ceil(arr[10]);

console.log(Math.max(...arr));
