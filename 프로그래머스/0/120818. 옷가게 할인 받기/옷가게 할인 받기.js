function solution(price) {
    const discount = [[100000, 5], [300000, 10], [500000, 20]].reverse()
    for (let i = 0; i < discount.length; i++) {
        const [base, rate] = discount[i]
        if (price >= base) return Math.floor(price * (100 - rate) / 100)
    }
    return price
}