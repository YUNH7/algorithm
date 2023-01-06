function solution(n) {
    var answer = 1;
    while (n % answer !== 1) {
        answer++
    }
    return answer;
}