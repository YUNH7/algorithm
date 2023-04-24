function solution(dartResult) { // 점수|보너스SDT|[옵션*#] :string
    const square = {S: 1, D: 2, T: 3} 

    return dartResult.match(/\d+\D+/g).reduce((a, turn, idx, arr) =>{
        let score = parseInt(turn)
        const [bonus, opt] = turn.match(/\D/g)
        score **= square[bonus]
        
        if (arr[idx+1]?.includes('*')) score *= 2
        
        if (opt) {
            if (opt === '*') {
                score *= 2
            } else {
                score *= -1
            }
        }
        
        return a + score
    }, 0)
}