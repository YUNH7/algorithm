function solution(order) {
    const compare = ['3', '6', '9']
    return `${order}`.split('').reduce((a, c) => {
        if (compare.includes(c)) return a+1
        return a
    }, 0)
}