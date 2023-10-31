const newPosUp = (x, y) => [x, y-1];
const newPosDown = (x, y) => [x, y+1];
const newPosLeft = (x, y) => [x-1, y];
const newPosRight = (x, y) => [x+1, y];

const moveAbstract = (newPos) => (level, x, y) => {
    const levelCopy = JSON.parse(JSON.stringify(level));
    let newX, newY;
    [newX, newY] = newPos(x, y);
    if (levelCopy[newY][newX] != 9) {
        levelCopy[y][x] = 0;
        levelCopy[newY][newX] = 1;    
    }
    return levelCopy;
};

const moveUp = moveAbstract(newPosUp);
const moveDown = moveAbstract(newPosDown);
const moveLeft = moveAbstract(newPosLeft);
const moveRight = moveAbstract(newPosRight);

const findPlayer = (level) => {
    let x, y;
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            if (level[i][j] == 1) {
                y = i;
                x = j;
                break;
            }
        }
    }
    return [x,y];
}

export const LOGIC = {
    moveUp : moveUp,
    moveDown : moveDown,
    moveLeft : moveLeft,
    moveRight: moveRight,
    findPlayer : findPlayer
}







////////////////////////


// const pushUp = (p, y, x) => moveAbstract(p, y, x, (pp, y, x) => {pp[y-1][x] = 1; pp[y-2][x] = 5;})

// const moveDown = (p, y, x) => moveAbstract(p, y, x, (pp, y, x) => {pp[y+1][x] = 1})
// const pushDown = (p, y, x) => moveAbstract(p, y, x, (pp, y, x) => {pp[y+1][x] = 1; pp[y+2][x] = 5;})

// const moveLeft = (p, y, x) => moveAbstract(p, y, x, (pp, y, x) => {pp[y][x-1] = 1})
// const pushLeft = (p, y, x) => moveAbstract(p, y, x, (pp, y, x) => {pp[y][x-1] = 1; pp[y][x-2] = 5;})

// const moveRight = (p, y, x) => moveAbstract(p, y, x, (pp, y, x) => {pp[y][x+1] = 1})
// const pushRight = (p, y, x) => moveAbstract(p, y, x, (pp, y, x) => {pp[y][x+1] = 1; pp[y][x+2] = 5})


// const next = (p) => {
//     let nextStates = [];
//     for(let y = 0; y<p.length; y++) {
//         for(let x = 0; x<p[y].length; x++) {
//             if (p[y][x] == 1) {
//                 if (p[y-1][x] == 0) nextStates.push(moveUp(p, y, x))
//                 if (p[y+1][x] == 0) nextStates.push(moveDown(p, y, x))
//                 if (p[y][x-1] == 0) nextStates.push(moveLeft(p, y, x))
//                 if (p[y][x+1] == 0) nextStates.push(moveRight(p, y, x))

//                 if (p[y-1][x] == 5 && p[y-2][x] == 0) nextStates.push(pushUp(p, y, x))
//                 if (p[y+1][x] == 5 && p[y+2][x] == 0) nextStates.push(pushDown(p, y, x))
//                 if (p[y][x-1] == 5 && p[y][x-2] == 0) nextStates.push(pushLeft(p, y, x))
//                 if (p[y][x+1] == 5 && p[y][x+2] == 0) nextStates.push(pushRight(p, y, x))
//             }
//         }
//     }
//     return nextStates;
// }

// let nn = next(myP);
// console.log(nn);

