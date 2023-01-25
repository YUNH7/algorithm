function solution(phone_number) {
    let len = phone_number.length
    
    return '*'.repeat(len-4) + phone_number.slice(-4)
}