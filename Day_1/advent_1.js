const fs = require('fs');

function loadIntoArray(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n')

    return data;
}

function countIncrease(data) {
    let increase = 0;


    data.reduce((prev, current) => {
        console.log(prev);
        console.log(current);
        if (Number(prev) < Number(current)) {
            increase++;
        }

        return current;
    });

    return increase;
}

console.log(countIncrease(loadIntoArray('day1_input.txt')));