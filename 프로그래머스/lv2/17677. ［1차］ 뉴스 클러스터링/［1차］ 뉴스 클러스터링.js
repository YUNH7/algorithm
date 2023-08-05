function solution(str1, str2) {
    // 자카드 유사도: 두 집합의 교집합 크기를 합집합 크기로 나눈 값
    const createMultiset = (str) => {
        const regexp = new RegExp(/[a-zA-Z]/)
        return [...str].reduce((a,c,i,arr) => {
            if (arr[i+1] !== undefined && regexp.test(c) && regexp.test(arr[i+1])) {
                a.push(c.toLowerCase() + arr[i+1].toLowerCase())
            }
            return a
        }, [])
    }

    const multiset1 = createMultiset(str1)
    const multiset2 = createMultiset(str2)
    
    const intersection = multiset1.reduce((a,c) => {
        const idx = multiset2.indexOf(c)
        if (idx !== -1) {
            a++
            multiset2.splice(idx, 1)
        }
        return a
    }, 0)
    const union = [...multiset1, ...multiset2].length
    
    if (!intersection && !union) return 65536
    return Math.floor(intersection / union * 65536)
}