function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    
    const queue = []
    let result = 0
    for (let i = 0; i < cities.length; i++) {
        const formatCity = cities[i].toLowerCase()        
        const idx = queue.indexOf(formatCity)
        if (idx === -1) {
            result += 5
        } else {
            result++
            queue.splice(idx,1)
        }
        queue.push(formatCity)
        if (queue.length > cacheSize) queue.shift()
    }
    
    return result
}