function solution(my_str, n) {
    const regExp = new RegExp(`.{1,${n}}`, 'g')
    return my_str.match(regExp)
}