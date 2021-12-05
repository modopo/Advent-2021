const fs = require('fs');

function loadIntoArray(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n');

    return data;
}

function simpleDistance(array) {
    let coordinates = [0, 0];

    array.forEach(instruction => {
        let piece = instruction.split(' ');

        switch (piece[0]) {
            case 'forward':
                coordinates[0] += Number(piece[1]);
                break;
            case 'down':
                coordinates[1] += Number(piece[1]);
                break;
            case 'up':
                coordinates[1] -= Number(piece[1]);
                break;
        }
    })

    return coordinates[0] * coordinates[1];
}

function advanceDistance(array) {
    let coordinates = [0, 0, 0];

    array.forEach(instruction => {
        let piece = instruction.split(' ');

        switch (piece[0]) {
            case 'forward':
                coordinates[0] += Number(piece[1]);
                coordinates[1] += Number(piece[1]) * coordinates[2];
                break;
            case 'down':
                coordinates[2] += Number(piece[1]);
                break;
            case 'up':
                coordinates[2] -= Number(piece[1]);
                break;
        }
    })

    return coordinates[0] * coordinates[1];
}

console.log(advanceDistance(loadIntoArray('day2_input.txt')));