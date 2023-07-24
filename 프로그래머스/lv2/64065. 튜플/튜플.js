function solution(s) {
    const tupleArr = s.slice(2, -2).split('},{').sort((a, b) => a.length - b.length)
    const result = []
    const cntObj = {}
    for (let tuple of tupleArr) {
        const copyCnt = {...cntObj} 
        for (let num of tuple.split(',')) {
            if (copyCnt[num]) copyCnt[num]--
            else {
                result.push(+num)
                cntObj[num] = (cntObj[num] || 0) + 1
                break
            }
        }
    } 
    return result
}