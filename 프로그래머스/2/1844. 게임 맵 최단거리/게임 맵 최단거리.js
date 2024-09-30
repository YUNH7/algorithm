function solution(maps) { // n*m
    const n = maps.length - 1 // y 
    const m = maps[0].length - 1 // x
    
    const getWASD = ([y, x]) => {
        const result = [];
        if (y+1 <= n && maps[y+1][x]) result.push([y+1, x]);
        if (y-1 >= 0 && maps[y-1][x]) result.push([y-1, x]);
        if (x+1 <= m && maps[y][x+1]) result.push([y, x+1]);
        if (x-1 >= 0 && maps[y][x-1]) result.push([y, x-1]);
        return result;
    }

    const queue = [[[0, 0], 1]];
    while (queue.length) {
        const [coord, k] = queue.shift();        
        const wasd = getWASD(coord);
        for (let c of wasd) {
            const [y, x] = c;      
            if (y === n && x == m) return k+1;
            maps[y][x] = 0;
            queue.push([c, k+1]);
        };        
    }
    return -1;
}