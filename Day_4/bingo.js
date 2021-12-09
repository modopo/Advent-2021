const fs = require('fs');
const { resourceLimits } = require('worker_threads');

function loadNumbersCalled(fileName) {
    let data = fs.readFileSync(fileName).toString().split('\n');

    return data;
}

function storeBoard(data) {
    let unbroken = [];
    let boards = [];

    data.forEach(token => {
        if (token.length === 14) {
            unbroken.push(token.split(' ').filter(number => number !== ''))
        }
    })

    while (unbroken.length !== 0) {
        boards.push(makeBoard(unbroken))
    }

    return boards;
}

function makeBoard(boards) {
    let board = []
    for (let index = 0; index < 5; index++) {
        board.push(boards.shift());
    }

    return board;

}

function storeDrawnNumbers(data) {
    return data[0].split(',');
}

function checkBoard(board) {
    let win = false;

    if (!win) {
        win = board.some(row => {
            return row.filter(number => number === 'x').length === 5;
        })

        for (let outer = 0; outer < board.length; outer++) {
            let count = 0;
            for (let inner = 0; inner < board[outer].length; inner++) {
                if (board[inner][outer] === 'x') {
                    count++;
                }

                if (count === 5) {
                    win = true;
                }
            }
        }
    }

    return win;
}

function checkBoards(boards) {
    let winningBoard;

    winningBoard = boards.filter(board => checkBoard(board));

    return winningBoard;
}

function playGame(drawnNumbers, boards) {
    let solution = boards;

    for (let index = 0; index < drawnNumbers.length; index++) {
        solution = solution.map(board => {
            board = markBoard(board, drawnNumbers[index]);
            return board;
        });

        let result = checkBoards(solution);

        if (result.length === 1) {
            let sum = 0;
            result[0].forEach(row => {
                row.forEach(number => {
                    if (number !== 'x') {
                        sum += Number(number);
                    }
                })
            });

            return sum * Number(drawnNumber[index])
        }
    };

}

function markBoard(board, drawnNumber) {
    board = board.map(row => {
        row = row.map(number => {
            if (number === drawnNumber)
                return 'x';

            return number;
        })

        return row;
    })

    return board;
}

let data = loadNumbersCalled('day4_input.txt');
let boards = storeBoard(data);
let drawnNumber = storeDrawnNumbers(data);


console.log(playGame(drawnNumber, boards));