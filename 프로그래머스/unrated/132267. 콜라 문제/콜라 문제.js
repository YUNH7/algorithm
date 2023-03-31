function solution(a, b, n) { // 빈 병 a개를 가져다 주면 콜라 b개를 받을 수 있고 현재 빈 병의 개수는 n
    let answer = 0
    while(n >= a) {
        let r = parseInt(n/a)*b
        answer += r
        n = n%a + r
    }
    return answer
}