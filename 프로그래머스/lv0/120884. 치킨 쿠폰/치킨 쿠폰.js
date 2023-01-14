function solution(chicken) { // 주문한 치킨 수
    let result = 0
    let cntChic = chicken
    
    while (cntChic >= 10) {
        result += parseInt(cntChic / 10)
        cntChic = parseInt(cntChic / 10) + cntChic%10
    }
    return result
}