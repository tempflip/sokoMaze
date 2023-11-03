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

const makeMaze = (mz, xStart, yStart, xEnd, yEnd, isHor=true, doRec=3) => {
    let maxSize = isHor ? yEnd-yStart : xEnd-xStart;
    if (maxSize < 3) return mz;
    let drawMe = isHor ? hor : ver;

    let where = 1 + Math.floor(Math.random()*(maxSize - 2))

    // console.log(doRec, ' : arguments', xStart, yStart, xEnd, yEnd, isHor, doRec, maxSize, where);
    
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

const findElement = (level, el) => {
    let xy = [];
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level.length; j++) {
            if (level[i][j] == el) {
                xy.push([j,i]);
            }
        }
    }
    return xy;
};

const fillEmpties = (mz, n, elTofill = 0, elFillWith = 9) => {
    let empties = findElement(mz, elTofill);
    console.log('n', n);
    for (let i = 0; i<n; i++) {
        let r = Math.floor(Math.random() * empties.length);
        console.log('## r ', r);
        let [x, y] = empties[r];
        mz[y][x] = elFillWith;
    }
    return mz;
}

module.exports = {
    makeMaze : makeMaze,
    findElement : findElement,
    fillEmpties : fillEmpties
}