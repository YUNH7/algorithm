function solution(n, t, m, p) { // n진법, 미리구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
    let result = ''
    let order = 0
    while (result.length < t*m) {
        result += order.toString(n)
        order++
    }
    const regex = new RegExp(`.{1,${m}}`, 'g');
    return result.toUpperCase().replace(regex, (w) => w[p-1]).slice(0,t)
}
