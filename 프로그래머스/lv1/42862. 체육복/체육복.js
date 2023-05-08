function solution(n, lost, reserve) { // 전체 학생 수, 도난당한 학생, 여벌 체육복
    lost.sort((a,b) => a - b)
    reserve.sort((a,b) => a - b)
    lost = lost.filter(l => {
        if (reserve.includes(l)) {
            reserve.splice(reserve.indexOf(l), 1)
            return false
        } else {
            return true
        }
    })
    
    for (let l of lost) {
        reserve = reserve.filter(r => r >= l - 1)
        if (reserve[0] === l - 1 || reserve[0] === l + 1) {
            reserve.shift()
        } else {
            n--
        }
    }
    return n
}