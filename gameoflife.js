const row0 = new Array(4);
row0[0] = '*';
row0[1] = ' ';
row0[2] = '*';
row0[3] = ' ';

const row1 = new Array(4);
row1[0] = ' ';
row1[1] = '*';
row1[2] = '*';
row1[3] = ' ';
const row2 = new Array(4);
row2[0] = '*';
row2[1] = '*';
row2[2] = ' ';
row2[3] = '*';
const row3 = new Array(4);
row3[0] = '*';
row3[1] = ' ';
row3[2] = '*';
row3[3] = ' ';

const biDimensionalArray = new Array(4);
biDimensionalArray[0] = row1;
biDimensionalArray[1] = row2;
biDimensionalArray[2] = row0;
biDimensionalArray[3] = row3;

let alive = '*';
let died = ' ';
function contatorNeibourgtDied() {
    for (let i = 0; i < biDimensionalArray.length; i++) {
        for (let j = 0; j < biDimensionalArray[i][j]; j++) {
            let counterDied = 0;
            if (biDimensionalArray[i - 1][j - 1] === ' ') {
                return counterDied++;
            }
            if (biDimensionalArray[i - 1][j] === ' ') {
                return counterDied++;
            }
            if (biDimensionalArray[i - 1][j + 1] === ' ') {
                return counterDied++;
            }
            if (biDimensionalArray[i][j - 1] === ' ') {
                return counterDied++;
            }
            if (biDimensionalArray[i][j + 1] === ' ') {
                return counterDied++;
            }
            if (biDimensionalArray[i + 1][j - 1] === ' ') {
                return counterDied++;
            }
            if (biDimensionalArray[i + 1][j] === ' ') {
                return counterDied++;
            }
            if (biDimensionalArray[i + 1][j + 1] === ' ') {
                return counterDied++;
            }
            return counterDied;
        }
    }
}
function contatorNeibourgtAlive() {
    for (let i = 0; i < biDimensionalArray.length; i++) {
        for (let j = 0; j < biDimensionalArray[i][j]; j++) {
            let counterAlive = 0;
            if (biDimensionalArray[i - 1][j - 1] === '*') {
                return counterAlive++;
            }
            if (biDimensionalArray[i - 1][j] === '*') {
                return counterAlive++;
            }
            if (biDimensionalArray[i - 1][j + 1] === '*') {
                return counterAlive++;
            }
            if (biDimensionalArray[i][j - 1] === '*') {
                return counterAlive++;
            }
            if (biDimensionalArray[i][j + 1] === '*') {
                return counterAlive++;
            }
            if (biDimensionalArray[i + 1][j - 1] === '*') {
                return counterAlive++;
            }
            if (biDimensionalArray[i + 1][j] === '*') {
                return counterAlive++;
            }
            if (biDimensionalArray[i + 1][j + 1] === '*') {
                return counterAlive++;
            }
            return counterAlive;
        }
    }
}
let neightbordD = contatorNeibourgtDied();
function diedCount() {
    if (neightbordD === 3) {
        return alive;
    }
}
let neightbordA = contatorNeibourgtAlive();

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
    neightbordA;
    neightbordD;
    aliveCount();
    diedCount();
    contatorNeibourgtDied();
    contatorNeibourgtAlive();
    alive, died;
};

gameOfLife;
