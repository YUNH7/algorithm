function solution(N, stages) {
    const stageFailure = Object
    .entries(stages.reduce((obj, stage) => {
        obj[stage] = (obj[stage] || 0) + 1;
        return obj;
    }, {}))
    .sort((a,b) => b[0] - a[0])
    .map((stageCnt, i, arr) => { 
        stageCnt[2] = (arr[i-1]?.[2] || 0) + stageCnt[1];
        return stageCnt;
    })
    .map((player, i) => [player[0], player[1]/player[2]])
    .sort((a, b) => a[0]- b[0])
    .sort((a, b) => b[1]- a[1])
    .map(el => +el[0]);
    
    if (stageFailure.includes(N+1)) stageFailure.splice(stageFailure.indexOf(N+1), 1);
    
    const rest = new Array(N).fill(0).map((_, i) => i+1).filter(stage => !stageFailure.includes(stage));
    return stageFailure.concat(rest);
}