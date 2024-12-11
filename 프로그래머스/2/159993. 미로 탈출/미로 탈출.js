function solution(maps) {
    const lever = maps.reduce((a, str, idx) => {
        const leverIdx = str.indexOf('L');
        if (leverIdx !== -1) return [idx, leverIdx];
        return a;
    }, []);
    
    const yLen = maps.length;
    const xLen = maps[0].length;
    const aux = (destination) => {
        const copiedMaps = maps.map(str => [...str]);
        const queue = [[lever, 0]];
        let result;
        const addRoute = (y, x, cnt) => {
            const next = copiedMaps[y][x];
            if (next === destination) result = cnt + 1;
            else if (next !== 'X') {
                queue.push([[y, x], cnt+1]);
                copiedMaps[y][x] = 'X'
            }
        }
        while (queue.length && !result) {
            const [[y, x], cnt] = queue.shift();
            
            if (y+1 < yLen) addRoute(y+1, x, cnt);
            if (y-1 >= 0) addRoute(y-1, x, cnt);
            if (x+1 < xLen) addRoute(y, x+1, cnt);
            if (x-1 >= 0) addRoute(y, x-1, cnt);
        }
        return result;
    }
    const toStart = aux('S');
    const toEnd = aux('E');
    return toStart && toEnd ? toStart + toEnd : -1;
}