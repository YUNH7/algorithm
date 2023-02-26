function solution(s) {
    let arr = s.split(' ')
    
    const aux = (str) => {
        let result = ''
        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                result += str[i].toLowerCase()
            } else {
                result += str[i].toUpperCase()
            }
        }
        return result
    }
    
    const result = []
    for (let el of arr) {
        result.push(aux(el))
    }
    return result.join(' ')
}