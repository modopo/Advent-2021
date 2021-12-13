const fs = require('fs');

function loadInput(filename) {
    let data = fs.readFileSync(filename).toString().split('\n');

    return data;
}

function parseCoordinate(input) {
    let coordinates = input.map(instruction => {
        return instruction.replace(' ->', ' ');
    })

    return coordinates.map(coord => {
        return coord.split(' ').filter(entry => entry !== '');
    });

}

let raw = loadInput('test_input.txt');

console.log(parseCoordinate(raw));