function solution(strings, n) { // 문자열 배열, 정수 -> 문자열의 n번째 글자를 기준으로 오름차순
    strings.sort()
    let sortNth = strings.map(el => el[n]).sort()
    let result = []
    for (let el of sortNth) {
        let idx
        for(let i = 0; i< strings.length; i++) {
          if (strings[i][n] === el) {
            idx = i
            break
          }
        }
    result.push(...strings.splice(idx,1))
    }
    return result
}