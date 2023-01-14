function solution(my_string) { // 문자열- 소문자, 대문자, 자연수
    let result = 0
    for (let i = 0; i < my_string.length; i++) {        
        let num = parseInt(my_string.slice(i))
        if (!Number.isNaN(num)) {
            result += num
            i += String(num).length - 1
        }
    }
    return result
}