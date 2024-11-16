function solution(N, stages) {
    const blocked = new Array(N+1).fill(0);
    stages.forEach(stage => blocked[stage-1]++);
    
    const players = blocked.map((b, i, arr) => ({rate: b === 0 ? 0 : b / arr.slice(i).reduce((a, c) => a+c), stage: i+1}));
    players.pop();
    
    return players
        .sort((a, b) => b.rate - a.rate)
        .map(el => el.stage);
}