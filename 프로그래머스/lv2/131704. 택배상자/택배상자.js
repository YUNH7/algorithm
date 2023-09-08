function solution(order) {
    const stack = []
    let inTruck = 0
    for (let i = 1; i <= order.length; i++) {
        if (i !== order[inTruck]) stack.push(i)
        else {
            inTruck++
            while (stack.length) {
                if (stack.at(-1) === order[inTruck]) {
                    inTruck++
                    stack.pop()
                } else break
            }
        }
    }
    return inTruck
}