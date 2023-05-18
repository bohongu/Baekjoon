const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n")

let array = Array.from({length: 20}, (_,idx) => idx+1);


for (let i = 0;i<input.length;i++) {
    const start = input[i].split(' ')[0];
    const end = input[i].split(' ')[1];
    const range = array.splice(start -1, end-start+1);
    range.reverse()
    array.splice(start - 1, 0 , ...range);
}

console.log(array.join(' '));
