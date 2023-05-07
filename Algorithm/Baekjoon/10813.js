const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const array = Array.from({ length: N }, (_, b) => b + 1);

for (let x = 1; x <= M; x++) {
  const [i, j] = input[x].split(" ").map(Number);
  let temp = array[i - 1];
  array[i - 1] = array[j - 1];
  array[j - 1] = temp;
}

console.log(array.join(" "));
