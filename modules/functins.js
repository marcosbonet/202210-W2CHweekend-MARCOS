import { myBigArray } from './bidimentionsarray.js';
export function contatorNeibordDied() {
    let counterDied = 0;
    for (let i = 1; i < myBigArray().length - 1; i++) {
        for (let j = 1; j < biDimensionalArray.length - 1; j++) {
            if (biDimensionalArray[i - 1][j - 1] === ' ') {
                counterDied++;
            }
            if (biDimensionalArray[i - 1][j] === ' ') {
                counterDied++;
            }
            if (biDimensionalArray[i - 1][j + 1] === ' ') {
                counterDied++;
            }
            if (biDimensionalArray[i][j - 1] === ' ') {
                counterDied++;
            }
            if (biDimensionalArray[i][j + 1] === ' ') {
                counterDied++;
            }
            if (biDimensionalArray[i + 1][j - 1] === ' ') {
                counterDied++;
            }
            if (biDimensionalArray[i + 1][j] === ' ') {
                counterDied++;
            }
            if (biDimensionalArray[i + 1][j + 1] === ' ') {
                counterDied++;
            }
        }
    }
    return counterDied;
}
contatorNeibordDied();

function contatorNeibordAlive() {
    let counterAlive = 0;
    for (let i = 1; i < biDimensionalArray.length - 1; i++) {
        for (let j = 1; j < biDimensionalArray.length - 1; j++) {
            if (biDimensionalArray[i - 1][j - 1] === '*') {
                counterAlive++;
            }
            if (biDimensionalArray[i - 1][j] === '*') {
                counterAlive++;
            }
            if (biDimensionalArray[i - 1][j + 1] === '*') {
                counterAlive++;
            }
            if (biDimensionalArray[i][j - 1] === '*') {
                counterAlive++;
            }
            if (biDimensionalArray[i][j + 1] === '*') {
                counterAlive++;
            }
            if (biDimensionalArray[i + 1][j - 1] === '*') {
                counterAlive++;
            }
            if (biDimensionalArray[i + 1][j] === '*') {
                counterAlive++;
            }
            if (biDimensionalArray[i + 1][j + 1] === '*') {
                counterAlive++;
            }
        }
    }
    return counterAlive;
}
contatorNeibordAlive();
