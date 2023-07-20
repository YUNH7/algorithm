function solution(arr1, arr2) {
    const commonLen = arr1[0].length
    const result = new Array(arr1.length).fill(0).map(el => new Array(arr2[0].length).fill(0))

    result.forEach((el, i) => {
        el.forEach((_, j) => {
            let multiply = 0
            for (let idx = 0; idx < commonLen; idx++) {
                multiply += arr1[i][idx]*arr2[idx][j]
            }
            result[i][j] = multiply 
        })
    })
    
    return result
}