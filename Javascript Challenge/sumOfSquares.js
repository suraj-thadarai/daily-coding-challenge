/*

Sum of Squares
Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

Tests
Waiting:1. sumOfSquares(5) should return 55.
Waiting:2. sumOfSquares(10) should return 385.
Waiting:3. sumOfSquares(25) should return 5525.
Waiting:4. sumOfSquares(500) should return 41791750.
Waiting:5. sumOfSquares(1000) should return 333833500.


*/

function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let square = i * i
        sum = sum + square;
    }

    return sum;
}