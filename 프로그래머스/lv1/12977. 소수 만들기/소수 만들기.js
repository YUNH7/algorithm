function solution(nums) {
    const isPrimeNum = (n) => {
        if (n === 1 || n === 2) return true
        else if (n < 2 || n % 2 === 0) return false
        
        for (let i = 3; i <= Math.sqrt(n); i+=2) {
            if(n % i === 0) return false
        }
        return true
    }
    
    let result = 0
    const aux = (n, add, idx) => {
        if (n === 3) {
            if(isPrimeNum(add)) result++
            return;
        }
        
        for (let i = idx; i < nums.length; i++) {
            aux(n+1, add+nums[i], i+1)
        }
    }
    
    aux(0,0,0)
    return result
}