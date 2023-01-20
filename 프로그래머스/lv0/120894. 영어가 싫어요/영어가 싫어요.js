function solution(numbers) {
    let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let result = ''
    
    while (numbers.length > 0) {
        for (let i = 3; i <= 5; i++) {
            if (nums.includes(numbers.slice(0,i))) {
                result += nums.indexOf(numbers.slice(0,i))
                numbers = numbers.slice(i)
            }
        }
    }
    return Number(result)
}