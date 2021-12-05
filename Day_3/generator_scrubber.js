const fs = require('fs');

function loadIntoArray(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n');

    return data;
}

function lowestCount(array, index) {
    let count = [0, 0];

    array.forEach(number => {
        let eachDigit = number.split('');

        if (eachDigit[index] === '0')
            count[0] += 1;
        else if (eachDigit[index] === '1')
            count[1] += 1;
    })


}

function countBit(array, index, scenario) {
    let count = [0, 0];

    array.forEach(number => {
        let eachDigit = number.split('');

        if (eachDigit[index] === '0')
            count[0] += 1;
        else if (eachDigit[index] === '1')
            count[1] += 1;
    })

    if (scenario) {
        if (count[0] > count[1]) {
            return '0';
        } else if (count[0] <= count[1])
            return '1';
    }

    if (!scenario) {
        if (count[0] > count[1]) {
            return '1';
        } else if (count[0] <= count[1])
            return '0';
    }
}

function filterByBit(array, index, scenario) {
    let result = [];

    result = array.filter(number => {
        if (number[0] === countBit(array, index, scenario))
            return number;
    })

    return result;
}

function determineNumber(array, scenario) {
    let result = array;

    for (let index = 0; index < result.length; index++) {
        result = filterByBit(array, index, scenario);
    }

    return result;
}

let data = [
    '00100', '11110',
    '10110', '10111',
    '10101', '01111',
    '00111', '11100',
    '10000', '11001',
    '00010', '01010'
]

console.log(determineNumber(data, false));

