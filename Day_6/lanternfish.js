const { count } = require('console');
const fs = require('fs');
const { totalmem } = require('os');

function intake(filename) {
    let result = fs.readFileSync(filename).toString().split(',').map(number => {
        return parseInt(number, 10);
    });

    return result;
}

function grow(arr, days) {
    let result = arr;

    for (let index = days; days > 0; days--) {
        let temp = [];
        let count = 0;

        result.map(fish => {
            if (fish !== 0) {
                fish -= 1;
                temp.push(fish);
            } else if (fish === 0) {
                temp.push(6);
                count++;
            }
        })

        for (let index = count; count > 0; count--) {
            temp.push(8);
        }

        result = temp;
    }

    return result;
}

function largeCount(arr, days) {
    let counts = Array(9).fill(0);

    arr.forEach(number => {
        counts[number] += 1;
    })

    for (let i = 0; i < days; i++) {
        const newCount = counts.shift();
        counts[6] += newCount;
        counts.push(newCount);
    }

    return counts.reduce((count, total) => count + total);
}

let raw = intake('day6_input.txt');
let result = largeCount(raw, 256);

console.log(result);