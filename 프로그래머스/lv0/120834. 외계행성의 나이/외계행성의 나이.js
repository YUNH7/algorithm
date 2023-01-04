function solution(age) {
    let alAge = 'abcdefghij'
    let strAge = String(age)
    
    let result = ''
    for (let i = 0; i < strAge.length; i++) {
        result += alAge[strAge[i]]
    }
    return result
}