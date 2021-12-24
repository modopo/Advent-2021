const fs = require('fs');

function intake(filename) {
    let result = fs.readFileSync(filename).toString().split(',').map(number => parseInt(number, 10));

    return result;
}


function calculateFuel(arr, point) {
    let fuel = 0;

    arr.forEach(position => {
        fuel += Math.abs(position - point);
    })

    return fuel;
}

function moreFuel(arr, point) {
    let fuel = 0;

    arr.forEach(position => {
        fuel += addition(Math.abs(position - point));
    })

    return fuel;
}

function addition(number) {
    let result = 0;

    for (let index = 0; index <= number; index++) {
        result += index;
    }

    return result;
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

function determineNew(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let least = moreFuel(arr, sorted[sorted.length - 1]);
    let result = 0;

    for (let index = 0; index <= sorted[sorted.length - 1]; index++) {
        result = moreFuel(arr, index);

        if (result < least) {
            least = result;
        }
    }

    return least;
}



let raw = intake('day6_input.txt')
console.log(determineNew(raw));