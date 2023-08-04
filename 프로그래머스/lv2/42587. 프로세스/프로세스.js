function solution(priorities, location) { // 중요도, 리턴할 프로세스 인덱스
    const aux = (n) => {
        if (priorities[n]) return n
        if (n >= priorities.length) return aux(0)
        if (!priorities[n]) return aux(n+1)
    }
    
    let nowIdx = 0
    for (let i = 1; i <= priorities.length; i++) {
        const lMax = Math.max(...priorities.slice(0, nowIdx))        
        const rClone = priorities.slice(nowIdx)
        const rMax = Math.max(...rClone) 
        const maxIdx = lMax <= rMax ? rClone.indexOf(rMax)+nowIdx : priorities.indexOf(lMax)
        
        priorities[maxIdx] = 0
        if (priorities[location] === 0) return i
        nowIdx = aux(maxIdx+1)

    }
}
