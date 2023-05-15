function solution(s) { // 문자열
    let x, countX = 0, countNotX = 0;
    
    return [...s].reduce((a, c, i) => {
        if (!x) {
            x = c
            countX = 1
        } else if (x === c) countX++
        else countNotX++
        
        if (countX === countNotX) {
            a++
            x = undefined
            countX = 0
            countNotX = 0            
        } else if (i === s.length - 1) a++
        return a
    }, 0)    
}