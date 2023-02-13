function solution(price, money, count) { // 이용료, 소지금, 이용횟수
    let total = 0
    for (let i = 1; i <= count; i++) {
        total += price * i
    }
    
    let answer = total - money
    return answer > 0 ? answer : 0
}