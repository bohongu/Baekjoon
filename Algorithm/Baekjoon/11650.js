const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

console.log(
  input
    .sort((a, b) =>
      a.split(" ")[0] === b.split(" ")[0]
        ? a.split(" ")[1] - b.split(" ")[1]
        : a.split(" ")[0] - b.split(" ")[0]
    )
    .join("\n")
);
