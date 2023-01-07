function solution(polynomial) {
    // x와 상수로 나누기
    let xNum = 0
    let num = 0
    for (let el of polynomial.split(' ')) {
        if (el === '+') continue
        else if (el[el.length - 1] === 'x') {
            xNum += parseInt(el)? parseInt(el) : 1
        } else {
            num += Number(el)
        }
    }
    if (xNum === 1) xNum = ''
    return xNum !== 0 && num ? `${xNum}x + ${num}` : xNum !== 0 ? `${xNum}x` : `${num}`
}