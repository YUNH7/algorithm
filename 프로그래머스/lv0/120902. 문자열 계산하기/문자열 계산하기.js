function solution(my_string) {
    let arr = my_string.split(' ')
    let result = Number(arr[0])
    let operator = ''
    for (let i = 1; i < arr.length; i++) {
        let isNum = Number(arr[i])
        if(Number.isNaN(isNum)) {
            operator = arr[i]
        } else if (operator === '+') {
            result += isNum
        } else {
            result -= isNum
        }
    }
    return result
    
    }