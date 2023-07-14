function solution(k, tangerine) {
    const tangerineCnt = tangerine.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1
        return a
    }, {})
    const cntObj = {}
    for (let el in tangerineCnt) {
        cntObj[tangerineCnt[el]] = (cntObj[tangerineCnt[el]] || 0) + 1
    }
    
    const cnts = Object.keys(cntObj).sort((a,b) => b - a)
    let result = 0
    for (let cnt of cnts) {
        const val = Math.ceil(k / cnt)
        const typeNum = cntObj[cnt] < val ? cntObj[cnt] : val
        
        result += typeNum
        k -= cnt*typeNum
        
        if (k <= 0) break
    }
    return result
    
}