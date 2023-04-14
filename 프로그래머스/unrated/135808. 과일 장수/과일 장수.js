function solution(k, m, score) { // 최고점, 한 상자에 m개
    // 상자에 담긴 가장 낮은 점수의 사과 * m이 그 상자의 가격
    
    score.sort((a, b) => b - a)
    let result = 0
    for (let i = 0; i < score.length; i += m) {
        const last = i + m - 1
        if (last >= score.length) break
        
        result += score[last] * m
    }
    return result
}