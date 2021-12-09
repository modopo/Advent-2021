const fs = require('fs');

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

    board.forEach(row => {
        if (row.filter(number => number === 'x').length === 5)
            return true;
    })

    for (let outer = 0; outer < board.length; outer++) {
        let count = 0;
        for (let inner = 0; inner < board[outer].length; inner++) {
            if (board[inner][outer] === 'x') {
                count++;
            }

            if (count === 5) {
                return true;
            }
        }
    }

    return false;
}

function checkBoards(boards) {
    let winningBoard;

    winningBoard = boards.filter(board => checkBoard(board));

    return winningBoard;
}

function playGame(drawnNumbers, boards) {
    let solution = boards;

    solution.forEach(board => {
        drawnNumber.map(number => {
            board = markBoard(board, number);
            return board;
        })
    })

    console.log(checkBoards(solution));

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

//let data = loadNumbersCalled('test_input.txt');
let drawnNumber = [
    '14', '21', '17', '24', '4',
    '17', '23', '2', '0', '14',
    '21', '24', '10', '16', '13',
    '6', '15', '25', '12', '22',
    '18', '20', '8', '19', '3',
    '26', '1'
]

let boards = [[
    ['14', '21', '17', '24', '4'],
    ['10', '16', '15', '9', '19'],
    ['18', '8', '23', '26', '20'],
    ['22', '11', '13', '6', '5'],
    ['2', '0', '12', '3', '7']
]]

playGame(drawnNumber, boards);
