function solution(d, budget) { // 신청지원액 배열, 예산
    d.sort((a,b) => a-b)
    // for (let i = 0; i < d.length; i++) {
    //     budget -= d[i]
    //     if (budget < 0) {
    //         return i
    //     }    
    // }
    // return d.length
    
    return d.reduce((acc, cur) => {
        budget -= cur
        return budget >= 0 ? acc + 1 : acc
    }, 0)
}