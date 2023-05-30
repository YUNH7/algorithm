function solution(survey, choices) { // 유형, 선택지
    // 사전순
    const type = [['R','T'], ['C','F'], ['J','M'], ['A','N']]
    const score = [3, 2, 1, 0, 1, 2, 3]
    const userScore = {}
    
    survey.forEach((el, i) => {
        const idx = choices[i] - 1
        if (idx < 3) userScore[el[0]] = (userScore[el[0]] || 0) + score[idx]
        else if (idx > 3) userScore[el[1]] = (userScore[el[1]] || 0) + score[idx]
    })
    
    return type.map(el => {
        const [first, second] = el
        return (userScore[first] || 0) < (userScore[second] || 0) ? second : first
    }).join('')
}