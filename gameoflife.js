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
function contatorNeibourgt() {
    for (let i = 0; i < biDimensionalArray.length; i++) {
        console.log(biDimensionalArray[i]);
        for (let j = 0; j < biDimensionalArray[i][j]; j++) {
            console.log(biDimensionalArray[i][j] + 1);

            let alive = alive + biDimensionalArray[i][j];
            let died = died + biDimensionalArray[i][j];

            let counter = 0;
            if (biDimensionalArray[i - 1][j - 1] === alive) {
                return counter++;
            }
            if (biDimensionalArray[i - 1][j] === alive) {
                return counter++;
            }
            if (biDimensionalArray[i - 1][j + 1] === alive) {
                return counter++;
            }
            if (biDimensionalArray[i][j - 1] === alive) {
                return counter++;
            }
            if (biDimensionalArray[i][j + 1] === alive) {
                return counter++;
            }
            if (biDimensionalArray[i + 1][j - 1] === alive) {
                return counter++;
            }
            if (biDimensionalArray[i + 1][j] === alive) {
                return counter++;
            }
            if (biDimensionalArray[i + 1][j + 1] === alive) {
                return counter++;
            }
            return counter;
        }
    }
    setTimeout(() => {
        console.log('');
    }, 1000);
}
let neightbord = contatorNeibourgt();

function aliveDied() {
    if (neightbord > 3) {
        return died;
    }
    if (neightbord === 3 || neightbord === 2) {
        return alive;
    }
    if (neightbord < 2) {
        return died;
    }
}
const gameOfLife = setTimeout(() => {
    console.log(neightbord, aliveDied());
}, 1000);
gameOfLife;
