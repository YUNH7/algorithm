function solution(n) {
    let result = 0
    let str = n.toString(3)
    for (let i = 0; i < str.length; i++) {
        result += 3**i * Number(str[i])
    }
    return result    
}