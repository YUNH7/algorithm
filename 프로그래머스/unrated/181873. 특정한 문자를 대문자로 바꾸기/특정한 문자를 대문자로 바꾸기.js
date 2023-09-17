function solution(my_string, alp) {
    const regExp = new RegExp(`[${alp}]`, 'g')
    return my_string.replace(regExp, (p) => p.toUpperCase())
}