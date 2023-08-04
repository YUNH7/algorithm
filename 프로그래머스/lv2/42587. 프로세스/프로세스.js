function solution(priorities, location) { // 중요도, 리턴할 프로세스 인덱스
    const clone = priorities.slice()    
    const aux = (n) => {
        if (clone[n]) return n
        if (n >= clone.length) return aux(0)
        if (!clone[n]) return aux(n+1)
    }
    
    let nowIdx = 0
    for (let i = 1; i <= priorities.length; i++) {
        const lMax = Math.max(...clone.slice(0, nowIdx))        
        const rClone = clone.slice(nowIdx)
        const rMax = Math.max(...rClone) 
        const maxIdx = lMax <= rMax ? rClone.indexOf(rMax)+nowIdx : clone.indexOf(lMax)
        
        clone[maxIdx] = 0
        if (clone[location] === 0) return i
        nowIdx = aux(maxIdx+1)

    }
}
