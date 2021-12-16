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
    number = flatten(parsed);

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
    let board = [...Array(size[0])].map(() => {
        return [...Array(size[1]).fill(-1)];
    });

    return board;
}

function flatten(parsed) {
    let number = [];

    parsed.forEach(entry => {
        entry.forEach(coord => {
            coord.split(',').forEach(num => {
                number.push(num);
            });
        })
    });

    return number;
}

function parseIntoFour(flatten) {
    return flatten.reduce((result, number, index) => {
        const subIndex = Math.floor(index / 4);

        if (!result[subIndex]) {
            result[subIndex] = [];
        }

        result[subIndex].push(number);

        return result;
    }, [])
}

function plotStraight(board, flatten) {
    let set = parseIntoFour(flatten);

    set.forEach(entry => {
        let x = entry[0];
        let y = entry[1];
        let a = entry[2];
        let b = entry[3];

        if (x !== a && x < a) {
            for (let index = x; index < a; index++) {
                board[index][y] += 1;
            }
        } else if (x !== a && x > a) {
            for (let index = x; index > a; index--) {
                board[index][y] += 1;
            }
        } else if (y !== b && y < b) {
            for (let index = y; index < b; index++) {
                board[x][index] += 1;
            }
        } else if (y !== b && y > b) {
            for (let index = y; index > b; index--) {
                board[x][index] += 1;
            }
        }
    })



}

let raw = loadInput('test_input.txt');
let parsed = parseCoordinate(raw);
let boardSize = [4, 4];
let board = makeBoard(boardSize);

console.log(board);
