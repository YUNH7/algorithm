function euc(a, b) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    
    let rest = max % min
    if (rest === 0) return min
    return euc(min, rest)
}

function prime(n) { // n이 소수인지 구하기
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        } 
    }
    return true
}

function solution(a, b) {  
    let bDiv = b/euc(a,b)
    // b/div -> 소인수가 2, 5만 있으면 유한소수
    // b/div === 1이면 유한소수
    // 아니면 무한소수
    
    let tmp = []
    for (let i = 2; i <= bDiv; i++) {
        if (bDiv % i === 0) {// 약수 구하기
        tmp.push(i)          
        }
    }
    
    let result = 1
    tmp.forEach((el) => {
        if(prime(el) && (el !== 2 && el !== 5)){
            result = 2        
        }
    })
    return result
    // 유한소수 1, 무한소수 2 리턴
}