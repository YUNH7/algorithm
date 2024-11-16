function solution(N, stages) {
    const blocked = stages.reduce((a, c) => {
            a[c-1]++;
            return a;
        }, new Array(N+1).fill(0));
    const players = blocked.map((b, i, arr) => ({rate: b / arr.slice(i).reduce((a, c) => a+c), i}));
    players.pop();
    
    return players
        .sort((a, b) => b.rate - a.rate)
        .map(el => el.i + 1);
}