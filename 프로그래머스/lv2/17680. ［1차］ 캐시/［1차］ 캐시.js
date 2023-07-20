function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    
    const stack = []
    let result = 0
    for (let i = 0; i < cities.length; i++) {
        const formatCity = cities[i].toLowerCase()        
        const idx = stack.indexOf(formatCity)
        if (idx === -1) {
            result += 5
        } else {
            result++
            stack.splice(idx,1)
        }
        stack.push(formatCity)
        if (stack.length > cacheSize) stack.shift()
    }
    
    return result
}