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
            styles.push(STYLES[level[i][j]]);
        }
        out.push('\n');
    }
    console.log(out.join('') , ...styles);
}

// ==============================

let mz = new Array(10).fill(10).map(el => {
    return new Array(10).fill(9);
});


const hor = (mz, x1, y1, x2, y2, yy) => {
    let xSize = x2-x1;
    for (i = 0; i < xSize; i++) {
        mz[y1+yy][x1+i] = 0;
    }
    return mz;
}

const ver = (mz, x1, y1, x2, y2, xx) => {
    let ySize = y2-y1;
    for (i = 0; i < ySize; i++) {
        mz[y1+i][x1+xx] = 0;
    }
    return mz;
}

const makeMaze = (mz, xStart, yStart, xEnd, yEnd, isHor=true, doRec=false) => {
    let maxSize = isHor ? yEnd : xEnd;
    let drawMe = isHor ? hor : ver;

    let where = 1 + Math.floor(Math.random()*(maxSize - 2))

    console.log('arguments', xStart, yStart, xEnd, yEnd, isHor, doRec, maxSize, where);
    
    drawMe(mz, xStart, yStart, xEnd, yEnd, where);

    if (doRec) {
        // let xx1 = 1 + Math.floor(Math.random()*(xEnd - 2));
        let xStart1 = xStart;
        let yStart1 = yStart;
        let xEnd1 = xEnd;
        let yEnd1 = where;

        // let xx2 = 1 +Math.floor(Math.random()*(xEnd - 2));
        let xStart2 = xStart;
        let yStart2 = where+1;
        let xEnd2 = xEnd;
        let yEnd2 = yEnd

        mz = makeMaze(mz, xStart1, yStart1, xEnd1, yEnd1, false);
        mz = makeMaze(mz, xStart2, yStart2, xEnd2, yEnd2, false);

    }
    return mz;
}
/*
let xx1 = 1 + Math.floor(Math.random()*(xEnd - 2));
let xStart1 = xStart;
let yStart1 = yStart;
let xEnd1 = xEnd;
let yEnd1 = yy;

let xx2 = 1 +Math.floor(Math.random()*(xEnd - 2));
let xStart2 = xStart;
let yStart2 = yy+1;
let xEnd2 = xStart;
let yEnd2 = yEnd


mz = ver(mz, xStart1, yStart1, xEnd1, yEnd1, xx1);
mz = ver(mz, xStart2, yStart2, xEnd2, yEnd2, xx2);
*/

// console.log(mz);

let xStart = 0;
let yStart = 0;
let xEnd = mz[0].length;
let yEnd = mz.length;
mz = makeMaze(mz, xStart, yStart, xEnd, yEnd, true,true)
updateScreen(mz);
