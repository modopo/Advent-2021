const fs = require('fs');

function loadIntoArray(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n');

    return data;
}

function gamma(array) {
    let count_zeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let count_ones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    array.forEach(number => {
        let eachDigit = number.split('');

        for (let index = 0; index < eachDigit.length; index++) {
            if (eachDigit[index] === '0') {
                count_zeros[index] += 1;
            } else if (eachDigit[index] === '1') {
                count_ones[index] += 1;
            }
        }
    })

    return determineMore(count_zeros, count_ones);
}

function epsilon(number) {
    let digits = number.split('');

    digits = digits.map(digit => {
        if (digit === '1')
            return '0';
        else
            return '1';
    }).join('');

    return digits;
}

function determineMore(count_zeros, count_ones) {
    let answer = [];

    for (let index = 0; index < count_zeros.length; index++) {
        if (count_zeros[index] > count_ones[index]) {
            answer.push('0');
        } else if (count_zeros[index] < count_ones[index]) {
            answer.push('1');
        }
    }

    return answer.join('');
}

function convertBit(bit) {
    let digits = parseInt(bit, 2)

    return digits;
}


let gammaBit = gamma(loadIntoArray('day3_input.txt'));
let epsilonBit = epsilon(gammaBit);

console.log(convertBit(gammaBit) * convertBit(epsilonBit));


