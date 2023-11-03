import {LOGIC} from './logic.js';
import {SCREEN} from './screen.js';
const MAZE = require('./maze.js');

// let LEVEL1 = [
//     [9, 9, 9, 9, 9],
//     [9, 6, 6, 9, 9],
//     [9, 0, 9, 1, 9],
//     [9, 0, 5, 0, 9],
//     [9, 0, 5, 0, 9],
//     [9, 0, 5, 0, 9],
//     [9, 9, 9, 9, 9]];

const playerMove = (movement) => (p) => {
    let x,y;
    [x,y] = LOGIC.findPlayer(game.currentLevel);
    console.log('xy', x, y);
    game.currentLevel = movement(game.currentLevel, x, y);
    SCREEN.updateScreen(game.currentLevel);
};

const KEYMAP = {
    'ArrowUp' : playerMove(LOGIC.moveUp),
    'ArrowDown' : playerMove(LOGIC.moveDown),
    'ArrowLeft' : playerMove(LOGIC.moveLeft),
    'ArrowRight' : playerMove(LOGIC.moveRight)
}

const main = () => {
    SCREEN.updateScreen(game.currentLevel);
    document.addEventListener('keydown', ev => {
        if (!KEYMAP[ev.key]) return;
        KEYMAP[ev.key]()
    })
    
};
let mz = new Array(10).fill(10).map(el => {
    return new Array(10).fill(9);
});

let xStart = 0;
let yStart = 0;
let xEnd = mz[0].length;
let yEnd = mz.length;

let LEVEL1 = MAZE.makeMaze(mz, xStart, yStart, xEnd, yEnd, true, 2)
LEVEL1 = MAZE.fillEmpties(LEVEL1, 9);

let empty = MAZE.findElement(LEVEL1, 0);
let [x,y] = empty[Math.floor(Math.random()*empty.length)];
LEVEL1[y][x] = 1;


let game = {
    currentLevel : JSON.parse(JSON.stringify(LEVEL1))
}
main();
