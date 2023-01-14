// function euc(a, b) {
//     let rest = a % b
//     if (rest === 0) return b
//     return euc(b, rest)
// }

// function solution(a, b) { 
//     // 약분
//     let bDiv = b/euc(a,b)
//     // b/div -> 소인수가 2, 5만 있으면 유한소수
//     // b/div === 1이면 유한소수
//     // 아니면 무한소수
    
//     while (bDiv % 2 === 0) bDiv /= 2
//     while (bDiv % 5 === 0) bDiv /= 5
//     return bDiv === 1 ? 1 : 2
//     // 유한소수 1, 무한소수 2 리턴
// }
function solution(a, b) {
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}