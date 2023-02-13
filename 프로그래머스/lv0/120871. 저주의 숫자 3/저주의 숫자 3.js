function solution(n) {
    let answer = 0
    for (let i = 1; i <= n; i++) {
        answer++
        aux()
    }
    
    function aux () {
        if (answer % 3 === 0 || String(answer).includes('3')) {
            answer++
            aux(answer)
        } 
    }
    
    return answer
}
