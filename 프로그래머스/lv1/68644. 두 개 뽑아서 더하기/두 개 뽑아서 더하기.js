function solution(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let num = numbers[i] + numbers[j]
            if (!result.includes(num)) result.push(num)
        }
    }
    return result.sort((a,b) => a-b)
}