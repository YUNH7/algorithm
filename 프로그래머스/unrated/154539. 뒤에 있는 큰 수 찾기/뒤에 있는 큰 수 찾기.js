function solution(numbers) {
    const result = new Array(numbers.length).fill(-1)

    for (let i = 0; i < numbers.length;) {
        const stack = [i]
        let nextIdx = i+1
        
        while (stack.length) {
            const nowIdx = stack.at(-1)
            if (nowIdx >= numbers.length-1) break
            if (numbers[nowIdx] < numbers[nextIdx]) {            
                stack.pop()
                result[nowIdx] = numbers[nextIdx]
            } else {
                stack.push(nextIdx)
                nextIdx++
            }
        }
        i = nextIdx        
    }
    
    return result
}

// 시간 초과
// return numbers.map((number, idx) => {
//     for (let i = idx+1; i < numbers.length; i++)
//     if (number < numbers[i]) return numbers[i]
//     return -1
// })

// 런타임 에러
// const result = new Array(numbers.length).fill(-1)

// const aux = (idx) => {
//     if (idx >= numbers.length-1) return -1
//     let nextIdx = idx+1
//     while (nextIdx !== -1 && numbers[idx] >= numbers[nextIdx]) nextIdx = aux(nextIdx)
//     if (nextIdx !== -1) result[idx] = numbers[nextIdx]
//     return nextIdx
// }

// for (let i = 0; i < numbers.length;) {
//     const nextIdx = aux(i)
//     if (nextIdx === -1) break
//     else i = nextIdx
// }

// return result
