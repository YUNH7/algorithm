function solution(numlist, n) {
    let tmp = []
    for (let num of numlist) {
        const n_num = Math.abs(n-num)
        if (tmp[n_num] === undefined) tmp[n_num] = []
        tmp[n_num].push(num) 
    } 
    tmp = tmp.flat(0)

    const result = []
    for (let el of tmp) {
        if (el.length === 1) result.push(el[0])
        else if (el[0] > el[1]) {result.push(el[0]); result.push(el[1]);}
        else {result.push(el[1]); result.push(el[0])}
    }
    return result
}