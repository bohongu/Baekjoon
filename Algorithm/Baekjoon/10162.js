const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = +fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const a = 300;
const b = 60;
const c = 10;

let result = "";
let tmp = input;

result += `${Math.floor(tmp / a)} `;
tmp %= a;

result += `${Math.floor(tmp / b)} `;
tmp %= b;

result += `${Math.floor(tmp / c)}`;
tmp %= c;

result = tmp === 0 ? result : -1;

console.log(result);
