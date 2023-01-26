function solution(s) {
    let arr = s.split(' ')
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length !== 0) {
         for (let j = 0; j < arr[i].length; j++) {
                if (j%2) {
                    result += arr[i][j].toLowerCase()
                } else {
                    result += arr[i][j].toUpperCase()
                }
            }   
        }
        result += ' '
    }
    return result.slice(0, -1)
}