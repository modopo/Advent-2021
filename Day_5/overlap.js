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

function determineBoard(parsed) {
    let number = [];

    parsed.forEach(entry => {
        entry.forEach(coord => {
            coord.split(',').forEach(num => {
                number.push(num);
            });
        })
    });

    let x = 0;
    let y = 0;

    for (let index = 0; index < number.length; index++) {
        if (index % 2 === 0) {
            if (number[index] > x) {
                x = number[index];
            }
        } else if (index % 2 !== 0) {
            if (number[index] > y) {
                y = number[index];
            }
        }
    };

    return [Number(x), Number(y)];

}

function makeBoard(size) {
    let board = [];

    for (let index = 0; index < 3; index++) {
        let inner = []
        for (let index2 = 0; index2 < 3; index++) {
            inner.push(0);
        }
        board.push(inner);
    }

    return board;
}

let raw = loadInput('test_input.txt');
let parsed = parseCoordinate(raw);
let boardSize = determineBoard(parsed);

console.log(determineBoard(parsed));
console.log(makeBoard([3, 3]));