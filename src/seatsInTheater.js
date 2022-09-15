function solution(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test seatsInTheater

// alternative solution
