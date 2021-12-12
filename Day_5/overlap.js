const fs = require('fs');

function loadInput(filename) {
    let data = fs.readFileSync(filename).toString().split('\n');

    return data;
}

function parseCoordinate(input) {
    let coordinates = input.toString().split(' -> ');

    return coordinates;
}

let raw = loadInput('test_input.txt');
console.log(parseCoordinate(raw));