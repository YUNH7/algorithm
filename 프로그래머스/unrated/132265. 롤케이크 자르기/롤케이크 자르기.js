function solution(topping) {
    const left = new Map()
    const right = topping.reduce((a,c) => {
        if (!a.has(c)) a.set(c, 0)
        a.set(c, a.get(c)+1)
        return a
    }, new Map())
    
    return topping.reduce((a,c) => {
        if (!left.has(c)) left.set(c, 0)
        left.set(c, left.get(c)+1)
        if (right.get(c) === 1) right.delete(c)
        else right.set(c, right.get(c)-1)
        
        if (left.size && left.size === right.size) a++
        return a
    }, 0)
}