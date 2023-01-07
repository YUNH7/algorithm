function solution(numbers) {
    let result = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
    
    return numbers.reduce((acc, cur) => acc-cur, result)
    
}