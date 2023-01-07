function solution(bin1, bin2) {
    let minBinArr = bin1.split('')
    let maxBinArr = bin2.split('')
    if (bin1.length > bin2.length) {
        minBinArr = bin2.split('')
        maxBinArr = bin1.split('')
    }
    
    while (minBinArr.length < maxBinArr.length) {
        minBinArr.unshift('0')
    }
    
    let tmp = maxBinArr.map((el, i) => {
        return Number(el) + Number(minBinArr[i])
    })

    while (tmp.includes(2)) {
        let idx = tmp.indexOf(2)
        if (idx === 0) {
            tmp.unshift(0)
            continue
        }
        tmp[idx] = 0
        tmp[idx-1] += 1
    }
    return tmp.join('')
}