function solution(brown, yellow) {
    // yellow를 만들 수 있는 약수+2
    // brown+yellow를 만들 수 있는 약수
    const divideYellow = divide(yellow).map(([frist, second]) => [frist+2, second+2])
    const divideEntire = divide(yellow+brown)
    return divideYellow
        .filter(([yf, ys]) => divideEntire
                .some(([df, ds]) => yf === df && ys === ds))[0]
}

function divide (n) {
    const dividedBy = []
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) dividedBy.push(i)
    }
    return dividedBy.map(num => [n/num, num])
}