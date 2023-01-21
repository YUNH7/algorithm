function solution(num, k) {
    let result = String(num).indexOf(String(k))
    return result >= 0 ? result+1 : -1 
}