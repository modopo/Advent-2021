const fs = require('fs');

function intake(filename){
    let temp = fs.readFileSync(filename).toString().split('\n');
    let result = []
    temp.forEach(sequence => {
        result.push(sequence.split(" | "));
    })    

    return result;
}

function unique(arr) {
    let count = 0;

    arr.forEach(pair => {
        let temp = pair[1].split(' ');
        temp.forEach(sequence => {
            if (sequence.length === 2 ||
                sequence.length === 4 ||
                sequence.length === 3 ||
                sequence.length === 7) {
                    count +=1;
                }
        })
    })

    return count;
}

let raw = intake('day8_input.txt');
let test = intake('test.txt');
console.log(unique(raw));