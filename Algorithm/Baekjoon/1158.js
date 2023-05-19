const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split(" ");

let N = +input.shift();
const K = +input.pop();
const queue = Array.from({ length: N }, (_, idx) => idx + 1);
const result = [];

while (queue.length) {
  for (let i = 1; i < K; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.shift());
}

console.log("<" + result.join(", ") + ">");
