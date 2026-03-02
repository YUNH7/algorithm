function solution(s) {
    const tupleArr = s.slice(2, -2).split('},{').sort((a, b) => a.length - b.length)
    const result = new Set()
    for (let el of tupleArr) {
        for (let num of el.split(',')) {
            result.add(+num)
        }
    } 
    return [...result]
}