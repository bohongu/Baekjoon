const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const max = +input[0].split(" ")[1];
const arr = [];
let roomNum = 0;

for (let i = 0; i < 6; i++) {
  arr.push([0, 0]);
}
for (let i in input) {
  if (i == 0) continue;
  arr[Number(input[i].split(" ")[1]) - 1][Number(input[i].split(" ")[0])]++;
}
for (let i in arr) {
  roomNum += Math.ceil(arr[i][0] / max);
  roomNum += Math.ceil(arr[i][1] / max);
}

console.log(roomNum);
