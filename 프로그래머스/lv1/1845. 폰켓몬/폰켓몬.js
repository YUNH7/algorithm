function solution(nums) {
    const len = nums.length/2
    let phone = new Set(nums)
    phone = [...phone]
    
    return Math.min(len, phone.length)
}