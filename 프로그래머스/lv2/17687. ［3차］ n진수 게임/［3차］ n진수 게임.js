function solution(n, t, m, p) {
    let result = ''
    let order = 0
    while (result.length < t*m) {
        result += order.toString(n)
        order++
    }
    const regex = new RegExp(`.{1,${m}}`, 'g');
    return result.toUpperCase().replace(regex, (w) => w[p-1]).slice(0,t)
}
