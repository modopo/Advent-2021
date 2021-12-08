const fs = require('fs');

function loadNumbersCalled(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n');

    return data;
}

console.log(loadNumbersCalled('test_input.txt'));