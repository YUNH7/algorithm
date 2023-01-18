function solution(array, n) {
    array.sort((a, b) => a-b)
    if (n < array[0]) return array[0]
    if (array[array.length-1] < n) return array[array.length-1]
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) return n
        if (array[i] < n && n < array[i+1]) {
            if (n-array[i] > array[i+1]-n) {
                return array[i+1]
            } else {
                return array[i]
            }
        }
    }
}