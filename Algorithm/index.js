const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs.readFileSync(__dirname + filePath).toString();

console.log();
