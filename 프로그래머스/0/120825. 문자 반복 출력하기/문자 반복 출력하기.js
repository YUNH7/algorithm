function solution(my_string, n) {
    const strArr = my_string.split('')
    
    return strArr.map(c => c.repeat(n)).join('')
}