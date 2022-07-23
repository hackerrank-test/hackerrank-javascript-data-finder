'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}


function dataFinder(data) {
    var find = function(minRange, maxRange, value) {
        if (minRange < 0 || maxRange >= data.length) {
            throw new Error('Invalid range');
        }
        for (let i = minRange; i <= maxRange; i++) {
            if (data[i] === value) {
                return true;
            }
        }
        return false;
    }
    return find;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const data = readLine().trim().split(' ');
    const finalData = data.map(val => parseInt(val));
    const join = dataFinder(finalData);
    try {
        const inputs = readLine().trim().split(' ');
        const result = join(parseInt(inputs[0]), parseInt(inputs[1]), parseInt(inputs[2]));
        ws.write(result.toString());
    } catch(e) {
        ws.write(`${e}`);
    }
    ws.end();
}