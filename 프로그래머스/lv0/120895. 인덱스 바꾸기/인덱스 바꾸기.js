function solution(my_string, num1, num2) {
    let strArr = my_string.split('')
    let oneC = strArr[num1]
    strArr[num1] = strArr[num2]
    strArr[num2] = oneC
    return strArr.join('')
}