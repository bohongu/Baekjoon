const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n")


input.shift();

const call = input.join(' ').split(' ');
let m = 0;
let y = 0;

for(let i of call) {
 y += i%30 === 0 ? (i/30 + 1)*10 : Math.ceil(i/30) * 10;
 m += i%60 === 0 ? (i/60 + 1)*15 : Math.ceil(i/60) * 15;
}

if (y > m) {
    console.log(`M ${m}`);
} else if (y < m) {
    console.log(`Y ${y}`);
} else {
    console.log(`Y M ${y}`);
}
