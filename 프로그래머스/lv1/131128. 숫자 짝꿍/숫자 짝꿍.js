function solution(X, Y) {
    const repeatCnt = (numStr) => {
        return [...numStr].reduce((acc, cur) => {
            if (!acc[cur]) acc[cur] = 1
            else acc[cur]++
            return acc
        }, {})
    }
    
    let xNumObj = repeatCnt(X)
    let yNumObj = repeatCnt(Y) 
    
    let sameKey = []
    for (let x in xNumObj) {
        if (yNumObj[x]) sameKey.push(x)
    }
    
    if (sameKey.length === 0) return '-1'
    else if (sameKey.length === 1 && sameKey[0] === '0') return '0'
    else {
        sameKey.sort((a,b) => Number(b) - Number(a))
        return sameKey.map(key => key.repeat(Math.min(xNumObj[key], yNumObj[key]))).join('')
    }
}