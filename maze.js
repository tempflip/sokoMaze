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

let mz = new Array(30).fill(10).map(el => {
    return new Array(30).fill(9);
});


const hor = (mz, x1, y1, x2, y2, yy, what = 0) => {
    let xSize = x2-x1;
    for (i = 0; i < xSize; i++) {
        mz[y1+yy][x1+i] = what;
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

const makeMaze = (mz, xStart, yStart, xEnd, yEnd, isHor=true, doRec=2) => {
    let maxSize = isHor ? yEnd-yStart : xEnd-xStart;
    let drawMe = isHor ? hor : ver;

    let where = 1 + Math.floor(Math.random()*(maxSize - 2))

    console.log(doRec, ' : arguments', xStart, yStart, xEnd, yEnd, isHor, doRec, maxSize, where);
    
    drawMe(mz, xStart, yStart, xEnd, yEnd, where);

    if (doRec > 0) {
        let xStart1,yStart1,xEnd1,yEnd1;
        let xStart2,yStart2,xEnd2,yEnd2;
        if (isHor) {
            xStart1 = xStart;
            yStart1 = yStart;
            xEnd1 = xEnd;
            yEnd1 = where;

            xStart2 = xStart;
            yStart2 = where+1;
            xEnd2 = xEnd;
            yEnd2 = yEnd
        } else { // vertical
            xStart1 = xStart;
            yStart1 = yStart;
            xEnd1 = where;
            yEnd1 = yEnd;  
            
            xStart2 = where + 1;
            yStart2 = yStart;
            xEnd2 = xEnd;
            yEnd2 = yEnd;
            
        }
        
        mz = makeMaze(mz, xStart1, yStart1, xEnd1, yEnd1, !isHor, doRec-1);
        mz = makeMaze(mz, xStart2, yStart2, xEnd2, yEnd2, !isHor, doRec-1);

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
mz = makeMaze(mz, xStart, yStart, xEnd, yEnd, false)
updateScreen(mz);
