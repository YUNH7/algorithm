function solution(elements) {
    const copyTwice = elements.concat(elements)
    const sumMap = new Map()
    for (let addN = 0; addN < elements.length; addN++) {
        for (let i = 0; i < elements.length; i++) {
            const sum = copyTwice.slice(i, i+addN+1).reduce((a, c) => a + c)
            sumMap.set(sum, true)
        }
    }
    
    return sumMap.size
}