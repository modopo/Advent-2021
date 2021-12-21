const fs = require('fs');

function intake(filename) {
    let result = fs.readFileSync(filename).toString().split(',').map(number => parseInt(number, 10));

    return result;
}

function middle(arr) {
    let sorted = arr.sort((a, b) => a - b);

    return sorted[(Math.floor(sorted.length / 2))];
}

function calculateFuel(arr, point) {
    let fuel = 0;

    arr.forEach(position => {
        fuel += Math.abs(position - point);
    })

    return fuel;
}



let raw = intake('test.txt');

console.log(calculateFuel(raw, middle(raw)));