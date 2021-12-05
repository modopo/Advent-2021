const fs = require('fs');

function loadIntoArray(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n')

    return data;
}

function threeWindowSum(array) {
    let result = [];

    for (let index = 0; index < array.length - 2; index++) {
        result.push(Number(array[index]) + Number(array[index + 1]) + Number(array[index + 2]));
    }

    return result;
}

function countIncrease(data) {
    let increase = 0;

    data.reduce((prev, current) => {
        if (Number(prev) < Number(current)) {
            increase++;
        }

        return current;
    });

    return increase;
}

console.log(countIncrease(threeWindowSum(loadIntoArray('day1_input.txt'))));