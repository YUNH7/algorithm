function solution(numbers, k) {
    // 짝수 배열이면 그대로, 홀수 배열이면 2배로
    let tmpArr = numbers.length % 2 ? [...numbers, ...numbers] : numbers
    
    // 인덱스가 짝수인 것만 배열로 만들기
    let evenIdxArr = tmpArr.filter((el, i) => i%2===0)
    
    // 공 던지는 횟수 k를 evenIdxArr 길이로 나눈 나머지-1
    let resultIdx = k%evenIdxArr.length -1
    
    if (resultIdx < 0) {
        resultIdx += evenIdxArr.length
    }
    return evenIdxArr[resultIdx]
}