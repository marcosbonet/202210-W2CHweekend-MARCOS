import { myBigArray } from './bidimentionsarray.js';
export function contatorNeibordDied() {
    let counterDied = 0;
    for (let i = 1; i < myBigArray().length - 1; i++) {
        for (let j = 1; j < myBigArray().length - 1; j++) {
            if (myBigArray()[i - 1][j - 1] === ' ') {
                counterDied++;
            }
            if (myBigArray()[i - 1][j] === ' ') {
                counterDied++;
            }
            if (myBigArray()[i - 1][j + 1] === ' ') {
                counterDied++;
            }
            if (myBigArray()[i][j - 1] === ' ') {
                counterDied++;
            }
            if (myBigArray()[i][j + 1] === ' ') {
                counterDied++;
            }
            if (myBigArray()[i + 1][j - 1] === ' ') {
                counterDied++;
            }
            if (myBigArray()[i + 1][j] === ' ') {
                counterDied++;
            }
            if (myBigArray()[i + 1][j + 1] === ' ') {
                counterDied++;
            }
        }
    }
    return counterDied;
}

export function contatorNeibordAlive() {
    let counterAlive = 0;
    for (let i = 1; i < myBigArray().length - 1; i++) {
        for (let j = 1; j < myBigArray().length - 1; j++) {
            if (myBigArray()[i - 1][j - 1] === '*') {
                counterAlive++;
            }
            if (myBigArray()[i - 1][j] === '*') {
                counterAlive++;
            }
            if (myBigArray()[i - 1][j + 1] === '*') {
                counterAlive++;
            }
            if (myBigArray()[i][j - 1] === '*') {
                counterAlive++;
            }
            if (myBigArray()[i][j + 1] === '*') {
                counterAlive++;
            }
            if (myBigArray()[i + 1][j - 1] === '*') {
                counterAlive++;
            }
            if (myBigArray()[i + 1][j] === '*') {
                counterAlive++;
            }
            if (myBigArray()[i + 1][j + 1] === '*') {
                counterAlive++;
            }
        }
    }
    return counterAlive;
}
