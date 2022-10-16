import { myBigArray } from './bidimentionsarray.js';
import { contatorNeibordAlive, contatorNeibordDied } from './functins.js';

let alive = '*';
let died = ' ';

let neightbordD = contatorNeibordDied(counterDied);
function diedCount() {
    if (neightbordD === 3) {
        return alive;
    }
}
let neightbordA = contatorNeibordAlive(counterAlive);

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
    contatorNeibordDied();
    contatorNeibordAlive();
    alive, died;
};

setInterval(() => {
    gameOfLife();
}, 1000);
