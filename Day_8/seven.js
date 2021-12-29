const fs = require('fs');

function intake(filename) {
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
                count += 1;
            }
        });
    });

    return count;
}

function unique(sequence) {
    let signals = sequence.split(" ");
    let keys = [];

    signals.forEach(output => {
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
    let seqArr = sequence.split(' ').map(seq => {
        return seq.split('').sort().join('');
    });

    let linePosition = [];
    let sixLength = [];
    let deduced = unique(sequence);

    seqArr.forEach(str => {
        if (str.length === 6) {
            sixLength.push(str);
        }
    })


    sixLength.forEach(str => {
        if (compareShortToLong(deduced[1], str).length !== 0) {
            deduced[6] = str.split('').sort().join('');
        } else if (compareShortToLong(deduced[4], str).length === 0) {
            deduced[9] = str.split('').sort().join('');
        } else {
            deduced[0] = str.split('').sort().join('');
        }
    });

    linePosition[2] = compareShortToLong(deduced[4], deduced[6])[0];
    linePosition[0] = compareShortToLong(deduced[7], deduced[1])[0];
    linePosition[5] = compareShortToLong(deduced[1], linePosition[2])[0];
    linePosition[3] = compareShortToLong(deduced[9], deduced[0])[0];
    linePosition[4] = compareShortToLong(deduced[0], deduced[9])[0];

    let temp = [...linePosition].sort().join('');
    linePosition[1] = compareShortToLong(deduced[4], temp)[0];
    temp = [...linePosition].sort().join('');
    linePosition[6] = compareShortToLong(deduced[8], temp)[0];

    return linePosition;
}

function numberPattern(deduction) {
    let pattern = [];

    pattern[0] = (deduction[0] + deduction[1] + deduction[2] + deduction[4] + deduction[5] + deduction[6]).split('').sort().join('');
    pattern[1] = (deduction[2] + deduction[5]).split('').sort().join('');
    pattern[2] = (deduction[0] + deduction[2] + deduction[3] + deduction[4] + deduction[6]).split('').sort().join('');
    pattern[3] = (deduction[0] + deduction[2] + deduction[3] + deduction[5] + deduction[6]).split('').sort().join('');
    pattern[4] = (deduction[1] + deduction[2] + deduction[3] + deduction[5]).split('').sort().join('');
    pattern[5] = (deduction[0] + deduction[1] + deduction[3] + deduction[5] + deduction[6]).split('').sort().join('');
    pattern[6] = (deduction[0] + deduction[1] + deduction[3] + deduction[4] + deduction[5] + deduction[6]).split('').sort().join('');
    pattern[7] = (deduction[0] + deduction[2] + deduction[5]).split('').sort().join('');
    pattern[8] = (deduction[0] + deduction[1] + deduction[2] + deduction[3] + deduction[4] + deduction[5] + deduction[6]).split('').sort().join('');
    pattern[9] = (deduction[0] + deduction[1] + deduction[2] + deduction[3] + deduction[5] + deduction[6]).split('').sort().join('');
    return pattern;
}

//let raw = intake('day8_input.txt');

let raw = intake('test1.txt');
let key = deduction(raw[0][0]);

console.log(numberPattern(key));

console.log(deduction(raw[0][0]));