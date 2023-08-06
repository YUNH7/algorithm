function solution(numbers, target) { // 정수들, 만드려는 숫자
    const cnt = numbers.reduce((a, c) => a + c)
    let result = 0
    const makeNum = (target, idx) => {
        if (target === 0) return result++
        else if (target < 0) return;
        
        for (let i = idx; i < numbers.length; i++) {
            makeNum(target - numbers[i], i + 1)
        }
    }
    makeNum((cnt + target)/2, 0)
    return result
}