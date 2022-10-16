import { contatorNeibordAlive, contatorNeibordDied } from './functins.js';
import { myBigArray } from './bidimentionsarray.js';

function paintNewArray() {}

for (let i = 1; i < myBigArray().length - 1; i++) {
    for (let j = 1; j < myBigArray()[i][j].length - 1; j++) {
        if (myBigArray()[i][j] === '*') {
            myBigArray()[i][j] = alive;
        }
        if (myBigArray()[i][j] === ' ') {
            myBigArray()[i][j] = died;
        }
        if (myBigArray()[i - 1][j - 1] === ' ') {
            myBigArray()[i - 1][j - 1] = died;
        }
        if (myBigArray()[i - 1][j] === ' ') {
            myBigArray()[i - 1][j] = died;
        }
        if (myBigArray()[i - 1][j + 1] === ' ') {
            myBigArray()[i - 1][j + 1] = died;
        }
        if (myBigArray()[i][j - 1] === ' ') {
            myBigArray()[i][j - 1] = died;
        }
        if (myBigArray()[i][j + 1] === ' ') {
            myBigArray()[i][j + 1] = died;
        }
        if (myBigArray()[i + 1][j - 1] === ' ') {
            myBigArray()[i + 1][j - 1] = died;
        }
        if (myBigArray()[i + 1][j] === ' ') {
            myBigArray()[i + 1][j - 1] = died;
        }
        if (myBigArray()[i + 1][j + 1] === ' ') {
            myBigArray()[i + 1][j + 1] = died;
        }
        if (myBigArray()[i - 1][j - 1] === '*') {
            myBigArray()[i - 1][j - 1] = alive;
        }
        if (myBigArray()[i - 1][j] === '*') {
            myBigArray()[i - 1][j] = alive;
        }
        if (myBigArray()[i - 1][j + 1] === '*') {
            myBigArray()[i - 1][j + 1] = alive;
        }
        if (myBigArray()[i][j - 1] === '*') {
            myBigArray()[i][j - 1] = alive;
        }
        if (myBigArray()[i][j + 1] === '*') {
            myBigArray()[i][j + 1] = alive;
        }
        if (myBigArray()[i + 1][j - 1] === '*') {
            myBigArray()[i + 1][j - 1] = alive;
        }
        if (myBigArray()[i + 1][j] === '*') {
            myBigArray()[i + 1][j - 1] = alive;
        }
        if (myBigArray()[i + 1][j + 1] === '*') {
            myBigArray()[i + 1][j + 1] = alive;
        }
    }
}

let alive = '*';
let died = ' ';

let neightbordD = contatorNeibordDied();
function diedCount() {
    if (neightbordD === 3) {
        return alive;
    }
}
let neightbordA = contatorNeibordAlive();

function aliveCount() {
    if (neightbordA > 3) {
        return died;
    }
    if (neightbordA === 3 || neightbordA === 2) {
        return alive;
    }
    if (neightbordA < 2) {
        return died;
    }
}

const gameOfLife = () => {
    console.log(myBigArray());
    console.log(paintNewArray());
    aliveCount();
    diedCount();
};

setInterval(() => {
    gameOfLife();
}, 1000);
