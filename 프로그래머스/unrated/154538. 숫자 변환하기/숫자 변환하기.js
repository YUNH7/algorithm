function solution(x, y, n) {
    if (x === y) return 0
    const record = new Set()
    const queue = [{nums:[x], idx:0}]
    
    const calcN23 = (num, newNums) => {
        const save = (num) => {
            if (!record.has(num) && num <= y) {
                record.add(num)
                newNums.push(num)
            }
        }
        save(num+n)
        save(num*2)
        save(num*3)
    }
    
    while (queue.length) {
        const {nums, idx} = queue.shift()
        const newNums = []
        for (let num of nums) calcN23(num, newNums)
        if (newNums.includes(y)) return idx+1
        if (newNums.length) queue.push({nums: newNums, idx: idx+1})
    }
    return -1    
}