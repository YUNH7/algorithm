function solution(n) {
    var answer = [];
    for (let i = 0; i <= n; i++) n % i === 0 && answer.push(i)
    return answer;
}