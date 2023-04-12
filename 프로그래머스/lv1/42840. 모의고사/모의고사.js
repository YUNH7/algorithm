function solution(answers) {
    const one = [1, 2, 3, 4, 5]
    const two = [2, 1, 2, 3, 2, 4, 2, 5]
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const result = [0, 0, 0]
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === one[i%one.length]) result[0]++
        if (answers[i] === two[i%two.length]) result[1]++
        if (answers[i] === three[i%three.length]) result[2]++
    }
    const max = Math.max(...result)
    return result.map((el,i) => el === max ? i+1 : 0).filter(el => el !== 0)
}