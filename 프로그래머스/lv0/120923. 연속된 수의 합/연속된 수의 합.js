function solution(num, total) {
    let mid = Math.floor(total/num)
    let result = [mid]
    let repeat = num % 2 ? parseInt(num / 2) : num/2 - 1
    for (let i = 1; i <= repeat; i++) {
        result.unshift(mid - i)
        result.push(mid + i)
    }
    if (num % 2 === 0) result.push(result[result.length-1]+1)
    return result
    
    
}