function solution(ingredient) { //1231
    let result = 0;
    let stack = [];
    
    ingredient.forEach(el => {
        stack.push(el)
        if (stack.length > 3 ) {
            const len = stack.length
            if(
                stack[len - 4] === 1 
                && stack[len - 3] === 2
                && stack[len - 2] === 3
                && stack[len - 1] === 1
              ) {
                stack.pop()
                stack.pop()
                stack.pop()
                stack.pop()
                result++
            }
        }
    })
    
    return result
}