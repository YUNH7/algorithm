function solution(s) {
    const numberArr = s.split(' ').map(c => Number(c))
    return `${Math.min(...numberArr)} ${Math.max(...numberArr)}`
}
