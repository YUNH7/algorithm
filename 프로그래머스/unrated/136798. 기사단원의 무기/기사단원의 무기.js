function solution(number, limit, power) { // 기사단 번호, 제한수치, 제한수치 초과 시 사용할 무기(공격력)
    let result = 0 // 무기를 만들기 위한 철의 무게(철 = 공격력)
    for (let i = 1; i <= number; i++) {
        let numPower = devidedCnt(i)
        result += numPower > limit ? power : numPower
    }
    return result
}

function devidedCnt(num, limit) {
    let result = 0 // 개수
    for (let i = 1; i < Math.sqrt(num); i++) {
        if (result*2 > limit) break
        if (num % i === 0) result++
    }
    return Number.isInteger(Math.sqrt(num)) ? result * 2 + 1 : result * 2
}