function solution(n, t, m, p) {
    let result = ''
    let stack = ''
    let order = 0
    while (result.length < t) {
        stack += order.toString(n)
        order++
        if (stack.length >= m) {
            const rest = stack.length % m
            if (rest) {
                result += findNum(stack.slice(0,-rest))
                stack = stack.slice(-rest)
            } else {
                result += findNum(stack.slice())
                stack = ''
            }
        }
    }
    
    function findNum (numStr) {
        const regex = new RegExp(`.{1,${m}}`, 'g');
        return numStr.toUpperCase().replace(regex, (w) => w[p-1])
    }
    
    return result
}
