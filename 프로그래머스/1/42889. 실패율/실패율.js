function solution(N, stages) {
    const blocked = stages.reduce((a, c) => {
            a[c-1]++;
            return a;
        }, new Array(N+1).fill(0));
    const players = blocked.map((_, i, arr) => arr.slice(i).reduce((a, c) => a+c));
    players.pop();
    
    return players
        .map((el, idx) => ({rate: blocked[idx] / el, idx}))
        .sort((a, b) => b.rate - a.rate)
        .map(el => el.idx+1);
}