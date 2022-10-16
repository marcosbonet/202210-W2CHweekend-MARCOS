export function myBigArray() {
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
    biDimensionalArray[0] = row0;
    biDimensionalArray[1] = row1;
    biDimensionalArray[2] = row2;
    biDimensionalArray[3] = row3;

    return biDimensionalArray;
}
