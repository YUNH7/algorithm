function solution(N, stages) { // 전체 스테이지 수, 막혀있는 사용자의 위치
    // 실패율 = stages[n] / (stages[n] + stages[n+1] + ...)
    const result = new Array(N+1).fill(0)
    for (let stage of stages) {
        result[stage-1]++
    }
    
    const rate = result.map((el, i) => !el ? 0 : el / result.slice(i).reduce((a, c) => a+c, 0))
    rate.pop()
    const rateCopy = rate.slice().sort((a, b) => b - a)

    return rateCopy.map((el, i) => {
        const idx = rate.indexOf(el);
        rate[idx] = -1;
        return idx +1;
    })
}