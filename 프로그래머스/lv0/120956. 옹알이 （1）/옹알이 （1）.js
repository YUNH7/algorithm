function solution(babbling) {
    let pron = ["aya", "ye", "woo", "ma"]
    let result = 0
    for (let babe of babbling) {        
        let len = pron.reduce((acc, cur) => {
            if (babe.includes(cur)) {
                acc += cur.length
            }
            return acc
        }, 0)
        if (len === babe.length){
            result++
        }
    }
    return result
}