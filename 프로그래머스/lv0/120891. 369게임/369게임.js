function solution(order) {
    return [...String(order)].reduce((acc, cur) => {
        if (Number(cur) % 3 === 0 && cur !== '0') {
            acc++
        }
        return acc
    }, 0)
}