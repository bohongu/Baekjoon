const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n")


let sum = 0;
let array = [];

for(let i of input) {
    if(Number(i) % 2 === 1) {
        sum += Number(i)
        array.push(Number(i))
    }
}

if (sum === 0) {
    console.log(-1)
} else {
    array.sort((a, b) => a - b);
    console.log(sum);
    console.log(array[0]);
}


