function solution(elements) {
    const copyTwice = elements.concat(elements)
    const sumSet = new Set()
    for (let i = 0; i < elements.length; i++) {
        let sum = 0
        for (let addN = 0; addN < elements.length; addN++) {
            sum += copyTwice[i+addN]
            sumSet.add(sum)
        }
    }
    
    return sumSet.size
}