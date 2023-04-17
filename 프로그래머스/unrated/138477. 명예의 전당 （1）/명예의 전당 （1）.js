function solution(k, score) {
//     const honor = new Array(k).fill(-1)
//     const result = []
    
//     while(score.length) {
//         const point = score.shift()
//         if (honor[0] < point) {
//             honor.splice(0,1,point)
//         }
        
//         honor.sort((a,b) => a-b)
//         const min = honor.reduce((a,c) => c < a && c !== -1 ? c : a, honor[honor.length -1])
//         result.push(min)
//     }
    
//     return result
    
    const stack = []
    return score.reduce((a,c) => {
        stack.push(c)
        stack.sort((a,b) => a - b)
        if(stack.length > k) {
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])
}