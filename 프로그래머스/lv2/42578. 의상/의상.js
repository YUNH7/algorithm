function solution(clothes) {
    const closet = new Map()
    for (let [_, type] of clothes) {
        closet.set(type, (closet.get(type) || 0) + 1)
    }
    
    let result = 1
    for (let [_, cnt] of closet) result *= (cnt+1)
    return result - 1

}