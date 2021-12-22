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

function determine(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let least = calculateFuel(arr, sorted[sorted.length - 1]);
    let result = 0;

    arr.forEach(number => {
        let test = calculateFuel(arr, number);

        if (test <= least) {
            least = test;
            result = number;
        };
    })

    return least;
}


let raw = intake('day6_input.txt');

console.log(determine(raw));