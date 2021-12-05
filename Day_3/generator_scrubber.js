const fs = require('fs');

function loadIntoArray(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n');

    return data;
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
        if (number[index] === countBit(array, index, scenario))
            return number;
    })

    return result;
}

function determineNumber(array, scenario) {
    let result = array;
    let index = 0;

    while (result.length > 1) {
        result = filterByBit(result, index, scenario);
        index++;
    }

    return result[0];
}

function convertBit(bit) {
    let digits = parseInt(bit, 2)

    return digits;
}

let data = loadIntoArray('day3_input.txt');

let oxygen = convertBit(determineNumber(data, true));
let CO2 = convertBit(determineNumber(data, false));

console.log(oxygen * CO2);
