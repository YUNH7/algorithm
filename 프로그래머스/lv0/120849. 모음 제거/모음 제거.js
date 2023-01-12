function solution(my_string) {
    return my_string.split('').filter(el => !'aeiou'.includes(el)).join('')
}