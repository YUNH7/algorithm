function solution(citations) {
    const hArray = [0]
    const max = Math.max(...citations)
    for (let h = 1; h < max; h++) {
        const overH = citations.filter(c => c >= h).length
        if (overH >= h) hArray.push(h)
        else break
    }
    return Math.max(...hArray)
}