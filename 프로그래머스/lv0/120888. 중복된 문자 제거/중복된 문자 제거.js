function solution(my_string) {
    let existed = {}
    let result = ''
    
    for (let i = 0; i < my_string.length; i++) {
        let character = my_string[i]
        if (!existed[character]) {
            existed[character] = true
            result += character
        }
    }
    return result
}