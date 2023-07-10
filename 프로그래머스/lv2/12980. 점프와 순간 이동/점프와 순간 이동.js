function solution(n) {
    // K칸 점프 시 K만큼 건전지 소모
    // 현재 온 거리 * 2 도달 시 순간 이동, 건전지 소모 X
    // 건전지 소모를 최소로 하여 N만큼 떨어진 장소로 이동
    
    let jump = 1
    while(n !== 1) {
        if (n%2) jump++
        n = Math.floor(n/2)
    }
    return jump
}