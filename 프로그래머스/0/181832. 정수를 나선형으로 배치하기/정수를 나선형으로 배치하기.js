function solution(n) {
    let [value, dir] = [1, 'R'];
    const setDir = {
        R: ((limit) => (x) => {
            if (x === limit) {
                limit -= 1;
                dir = 'D';
            }
        })(n-1),
        D: ((limit) => (_, y) => {
            if (y === limit) {
                limit -= 1;
                dir = 'L';
            }
        })(n-1),
        L: ((limit) => (x) => {
            if (x === limit) {
                limit += 1;
                dir = 'U';
            }
        })(0),
        U: ((limit) => (_, y) => {
            if (y === limit) {
                limit += 1;
                dir = 'R';
            }
        })(1),
    };
    const setCoord = {
        R: (x, y) => [x+1, y],
        D: (x, y) => [x, y+1],
        L: (x, y) => [x-1, y],
        U: (x, y) => [x, y-1],
    };    
    const result = new Array(n).fill(0).map(el => new Array(n).fill(0));
    
    const aux = (x, y) => {
        if (value === n ** 2 + 1) return;
        
        result[y][x] = value;
        value++;
        setDir[dir](x, y);
        aux(...setCoord[dir](x, y));
    }
    aux(0,0);
    return result;
}