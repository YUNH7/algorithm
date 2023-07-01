function solution(n) {
    
    const memo = {0: 0}
    const reduceNum = (num) => {
        if (memo[num] === undefined) memo[num] = num + reduceNum(num - 1)
        return memo[num]
    }
    
    let result = 0
    const aux = (divide) => {
        const val = Math.floor(n / divide)
        const plus = reduceNum(divide - 1)
        for (let i = 0; i < val; i++) {
            if ((val - i) * divide + plus === n) {
                result++
                return val - i
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        if (aux(i) <= 2) break
    }
    return result
}