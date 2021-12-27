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
        });
    });

    return count;
}

function analysis(sequence) {
    let signals = sequence.split(" ");
    let keys = [];

    signals.forEach(output =>{
        let temp = output.split('').sort().join('');
        switch (output.length) {
            case 2: 
                keys[1] = temp;
                break;
            case 3:
                keys[7] = temp;
                break;
            case 4:
                keys[4] = temp;
                break;
            case 7:
                keys[8] = temp;
                break;
        }
    });

    return keys;
}

let raw = intake('day8_input.txt');
let test = intake('test.txt');
console.log((analysis(raw[0][0])));