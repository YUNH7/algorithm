function solution(prices) {
    const result = []
    
    for (let i = 0; i < prices.length - 1; i++) {
        let cnt = 0
        const price = prices[i]
        for (let j = i+1; j < prices.length; j++) {
            cnt++
            if (price > prices[j]) break
        }
        result.push(cnt || 1)
    }
    result.push(0)
    return result
}