const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n")


for (let i of input) {
    let count = 0;
    for (let j of i) {
        if(j === '0') {
            count += 1;
        }
    }
    switch(count) {
        case 1: {
            console.log('A');
            break;
        }
        case 2: {
            console.log('B');
            break;
        }
        case 3: {
            console.log('C');
            break; 
        }
        case 4: {
            console.log('D');
            break;
        }
        default : {
            console.log('E');
            break;
        }

    }
    
}