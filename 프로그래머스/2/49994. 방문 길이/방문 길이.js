const move = (dir, {y, x}) => {
    switch (dir) {
        case 'U': return y - 1 >= 0 ? {y: y-1, x} : undefined;
        case 'D': return y + 1 <= 10 ? {y: y+1, x} : undefined;
        case 'R': return x + 1 <= 10 ? {y, x: x+1} : undefined;
        case 'L': return x - 1 >= 0 ? {y, x: x-1} : undefined;
        default: return;
    }
}
const opposite = {U: 'D', D: 'U', R: 'L', L: 'R'};

function solution(dirs) {
    const base = [...new Array(11)].map(() => new Array(11).fill(''));
    let coord = {y: 5, x: 5};
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        const {y, x} = coord;
        const newCoord = move(dir, coord);
        if (newCoord) {
            coord = newCoord;
            base[y][x] += dir;
            base[coord.y][coord.x] += opposite[dir];            
        }
    }
    return base.flat().reduce((a, c) => a + new Set(c).size, 0) / 2;
}