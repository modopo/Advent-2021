const fs = require('fs');

function intake(filename) {
    let result = fs.readFileSync(filename).toString().split(',').map(number => parseInt(number, 10));

    return result;
}

console.log(intake('test.txt'));