function solution(dartResult) { // 점수|보너스SDT|[옵션*#] :string // 1S2D*3T
    const square = {S: 1, D: 2, T: 3} 

    return dartResult.match(/\d+\D+/g).reduce((a, turn, idx, arr) =>{ // [ 1S, 2D*, 3T ]
        let score = parseInt(turn)
        const [bonus, opt] = turn.match(/\D/g)
        score **= square[bonus]
        
        console.log(opt)
        
        if (arr[idx+1]?.includes('*')) score *= 2
        
        if (opt === '*') {
            score *= 2
        } else if (opt === "#") {
            score *= -1
        }
        
        return a + score
    }, 0)
}