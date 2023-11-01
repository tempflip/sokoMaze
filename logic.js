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
