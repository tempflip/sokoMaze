import {LOGIC} from './logic.js';

let LEVEL1 = [
    [9, 9, 9, 9, 9],
    [9, 6, 6, 9, 9],
    [9, 0, 0, 1, 9],
    [9, 0, 5, 0, 9],
    [9, 0, 5, 0, 9],
    [9, 0, 0, 0, 9],
    [9, 9, 9, 9, 9]];


const updateScreen = () => {
    console.clear();
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
    for (let i = 0; i < game.currentLevel.length; i++) {
        for (let j = 0; j < game.currentLevel[i].length; j++) {
            out.push('%c' + CHARS[game.currentLevel[i][j]]);
            styles.push(STYLES[game.currentLevel[i][j]]);
        }
        out.push('\n');
    }
    console.log(out.join('') , ...styles);
}

const playerMove = (movement) => (p) => {
    let x,y;
    [x,y] = LOGIC.findPlayer(game.currentLevel);
    console.log('xy', x, y);
    game.currentLevel = movement(game.currentLevel, x, y);
    updateScreen();
};

const KEYMAP = {
    'ArrowUp' : playerMove(LOGIC.moveUp),
    'ArrowDown' : playerMove(LOGIC.moveDown),
    'ArrowLeft' : playerMove(LOGIC.moveLeft),
    'ArrowRight' : playerMove(LOGIC.moveRight)
}

let game = {
    currentLevel : JSON.parse(JSON.stringify(LEVEL1))
}


const main = () => {
    updateScreen();
    document.addEventListener('keydown', ev => {
        if (!KEYMAP[ev.key]) return;
        KEYMAP[ev.key]()
    })
    
};
main();