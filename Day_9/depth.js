const fs = require('fs');

function intake(filename) {
    let output = fs.readFileSync(filename).toString().split('\n');

    return output.map(number => {
        return number.split('').map(num => Number(num));
    });
}

function checkSurrounding(map) {
    let result = [];

    for(let outer = 0; outer < map.length; outer++) {
        for(let inner = 0; inner < map[outer].length; inner++) {

        }
    }
}

console.log(intake('test.txt'));