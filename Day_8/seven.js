const fs = require('fs');

function intake(filename){
    let temp = fs.readFileSync(filename).toString().split('\n');
    let result = []
    temp.forEach(sequence => {
        result.push(sequence.split(" | "));
    })    

    return result;
}

function uniqueCount(arr) {
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

function unique(sequence) {
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

function compareShortToLong(str1, str2) {
    let split1 = str1.split('');
    let split2 = str2.split('');
    let result1 = split1.filter(letter => {
        return split2.indexOf(letter) === -1;
    });

    let result2 = split2.filter(letter => {
        return split1.indexOf(letter) === -1;
    })

    return result1;
}

function deduction(sequence) {
    
    let linePosition = [];
    let sixLength = [];
    let deduced = unique(sequence);

    sequence.forEach(str => {
        if (str.length === 6) {
            sixLength.push(str);
        }
    })

    sixLength.forEach(str => {
        if (compareShortToLong(deduced[4], str).length !== 0) {
            deduced[6] = str;
        }
    });

    linePosition[2] = compareShortToLong(deduced[4], deduced[6])[0];

    console.log(linePosition[2]);

    
}


//let raw = intake('day8_input.txt');

let raw = intake('test1.txt');
let test = unique(raw[0][0]);

console.log(raw);
console.log(test[4]);
console.log(compareShortToLong('abfg', 'acdefg'));
//deduction(raw);