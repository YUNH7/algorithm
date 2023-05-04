function solution(n, m, section) { // n미터, 롤러의 길이 m미터, 다시 칠해야하는 구역이 담긴 배열
    let result = 0, start = 0
    
    for (let s of section) {
        if (s > start) {
            result++
            start = s + m - 1
        }
    }
    return result
}