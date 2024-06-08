function solution(N, stages) {
    const stageFailure = Object
    .entries(stages.reduce((obj, stage) => {
        obj[stage] = (obj[stage] || 0) + 1; // 각 층에 있는 유저 수 찾기
        return obj; // {1: 1, 2: 3, 3: 2, 4: 1, 6: 1}
    }, {})) // [[1,1], [2,3], [3,2], [4,1], [6,1]]
    .sort((a,b) => b[0] - a[0]) // [[6,1], [4,1], [3,2], [2,3], [1,1]]
    .map((stageCnt, i, arr) => { 
        stageCnt[2] = (arr[i-1]?.[2] || 0) + stageCnt[1]; // 각 층을 거쳐간 유저 수 계산
        return stageCnt;
    }) // [[6,1,1], [4,1,2], [3,2,4], [2,3,7], [1,1,8]]
    .map((player, i) => [player[0], player[1]/player[2]]) // [현재 stage, 실패율]
    .sort((a, b) => a[0]- b[0]) // 스테이지 오름차순 정렬
    .sort((a, b) => b[1]- a[1]) // 실패율 내림차순 정렬
    .map(el => +el[0]); // [6, 4, 3, 2, 1]
    
    if (stageFailure.includes(N+1)) stageFailure.splice(stageFailure.indexOf(N+1), 1);
    
    const rest = new Array(N).fill(0).map((_, i) => i+1).filter(stage => !stageFailure.includes(stage));
    return stageFailure.concat(rest);
}