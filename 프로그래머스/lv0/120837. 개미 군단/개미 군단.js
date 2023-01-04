function solution(hp) {
    let result = parseInt(hp/5)
    result += parseInt(hp%5/3) + hp%5%3
    return result
}