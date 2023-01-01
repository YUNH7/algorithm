function solution(n) {
    let str = String(n)
    let arr = str.split('')
    arr.sort((a,b)=> b-a)
    return Number(arr.join(''))
}