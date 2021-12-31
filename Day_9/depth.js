const fs = require('fs');

function intake(filename) {
    let output = fs.readFileSync(filename).toString().split('\n');

    return output.map(number => {
        return number.split('').map(num => Number(num));
    });
}

console.log(intake('test.txt'));