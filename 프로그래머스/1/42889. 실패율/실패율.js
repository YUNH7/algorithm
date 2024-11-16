function solution(N, stages) {
    const base = new Array(N+1).fill(0);
    stages.forEach(stage => base[stage-1]++);
    
    const failure = base.map((cnt, i) => [i+1, cnt === 0 ? 0 : cnt / base.slice(i).reduce((a, c) => a+c, 0)]);
    failure.pop();
    
    return failure.sort((a,b) => b[1] - a[1]).map(el => el[0]);
}