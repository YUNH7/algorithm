function solution(prices) {
    return prices.map((price, i) => {
        if (i === prices.length - 1) return 0
        let sec = 0
        for (let j = i + 1; j < prices.length; j++) {
            sec++
            if (price > prices[j]) break
        }
        return sec
    })
}