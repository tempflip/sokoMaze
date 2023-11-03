const MAZE = require('./maze.js');

const updateScreen = (level) => {
    // console.clear();
    const CHARS = {
        1 : 'M',
        5 : 'B',
        6 : 'Z',
        9 : 'X',
        0 : '.'
    }

    const STYLES = {
        1 : 'font-size: 32px; color: red;',
        5 : 'font-size: 32px; color: blue;',
        6 : 'font-size: 32px; color: green',
        9 : 'font-size: 32px; color: brown',
        0 : 'font-size: 32px; color: black',
    }

    let styles = []; 
    let out = [];
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            out.push('%c' + CHARS[level[i][j]]);
            // out.push(level[i][j]);
            styles.push(STYLES[level[i][j]]);
        }
        out.push('\n');
    }
    console.log(out.join('') , ...styles);
    // console.log(out.join(''));
}

// ==============================

let mz = new Array(15).fill(9).map(el => {
    return new Array(15).fill(9);
});

let xStart = 0;
let yStart = 0;
let xEnd = mz[0].length;
let yEnd = mz.length;
mz = MAZE.makeMaze(mz, xStart, yStart, xEnd, yEnd, true)
mz = MAZE.fillEmpties(mz, 9);

updateScreen(mz);
