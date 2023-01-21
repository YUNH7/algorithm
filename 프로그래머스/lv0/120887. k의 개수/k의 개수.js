function solution(i, j, k) {
    let arr = new Array(j-i+1).fill(i).map((el, i) => el+i).join('').split('')
    return arr.reduce((acc, cur) => {
        if (cur === String(k)) {
            acc++
        }
        return acc
    }, 0)
}