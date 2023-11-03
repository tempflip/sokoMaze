const updateScreen = (level) => {
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
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            out.push('%c' + CHARS[level[i][j]]);
            styles.push(STYLES[level[i][j]]);
        }
        out.push('\n');
    }
    console.log(out.join('') , ...styles);
};

export const SCREEN = {
    updateScreen : updateScreen
}