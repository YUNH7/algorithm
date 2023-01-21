function solution(before, after) {
    let b = before.split('').sort()
    let a = after.split('').sort()
    for (let i = 0; i < b.length; i++) {
        if (b[i] !== a[i]) {
            return 0
        }
    }
    return 1    
}