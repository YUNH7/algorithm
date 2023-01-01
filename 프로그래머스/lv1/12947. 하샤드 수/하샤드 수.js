function solution(x) {
    let str = String(x)
    let arr = str.split('')
    let harshad = arr.reduce((acc, cur)=> {
        return acc + Number(cur)
    }, 0)
    
    return x%harshad === 0
}