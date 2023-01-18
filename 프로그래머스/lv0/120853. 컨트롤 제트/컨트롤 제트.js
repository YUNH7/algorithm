function solution(s) { // 숫자 공백 Z가 담긴 문자열
    let arr = s.split(' ').reverse()
    let before = false
    let result = 0
    for (let el of arr) {
        if (el === 'Z') {
            before = true
        } else if (before) {
            before = false
        } else {
            result += Number(el)           
        }        
    }
    return result
}