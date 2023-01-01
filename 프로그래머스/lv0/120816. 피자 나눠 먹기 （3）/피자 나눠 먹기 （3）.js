function solution(slice, n) {
    // slice 피자 조각 2~10
    // n 사람 수
    // 한 명당 최소 한조각
    let result = parseInt(n/slice)
    return n % slice ? result + 1 : result
}