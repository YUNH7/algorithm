function solution(N, road, K) {
    const map = road.reduce((a, [y, x, h]) => {
        if (a[y][x] === 0 || a[y][x] > h) {
            a[y][x] = h;
            a[x][y] = h;
        }
        return a;
    }, new Array(N+1).fill(0).map(() => new Array(N+1).fill(0)));
    const flag = map[1].map(el => el <= K ? el : 0);
    
    const queue = [1];
    while (queue.length && flag.slice(1).some((el) => !el)) {
        const before = queue.shift();
        const beforeTime = flag[before];
        for (let i = 2; i < map[before].length; i++) {
            const hour = map[before][i];
            const newTime = beforeTime + hour
            if (hour && newTime <= K && (flag[i] === 0 || flag[i] >= newTime)) {
                flag[i] = newTime;
                queue.push(i);
            } 
        }
    }
    
    return flag.filter(Boolean).length + 1;
}