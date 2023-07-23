function solution(clothes) {
    const closet = {}
    for (let [_, type] of clothes) {
        closet[type] = (closet[type] || 0) + 1
    }
    
    let result = 1
    for (let type in closet) result *= (closet[type] + 1)
    return result - 1

}