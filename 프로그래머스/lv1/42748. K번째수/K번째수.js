function solution(array, commands) { // 기본 arr, [i배열, j배열, k배열]
    const aux = (i,j,k) => {
        let arr = array.slice(i-1, j).sort((a,b) => a-b)
        return arr[k-1]
    }

    const result = []
    for (let i = 0; i < commands.length; i++) {
        let val = aux(...commands[i])
        result.push(val)
    }
    return result
}