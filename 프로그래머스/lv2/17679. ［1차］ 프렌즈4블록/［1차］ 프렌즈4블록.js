function solution(m, n, board) {
    const boardArr = board.map(str => str.split(''))
    const record = new Array(m).fill(0).map(el => new Array(n).fill(0))
    const around = [[0,1], [1,0], [1,1]]
    let result = 0
    
    while (true) {
        let flag = result
        for (let row = 0; row < m - 1; row++) {
            for (let col = 0; col < n - 1; col++) {
                const now = boardArr[row][col]
                if (now !== 0 
                    && around.every(coord => boardArr[coord[0]+row][coord[1]+col] === now)) {
                    record[row][col] = 1
                    around.forEach(coord => record[coord[0]+row][coord[1]+col] = 1)
                }
            }
        }
        for (let row = 0; row < m; row++) {
            for (let col = 0; col < n; col++) {                
                if (record[row][col]) {
                    record[row][col] = 0
                    boardArr[row][col] = 0
                    result++
                }
            }
        }
        for (let col = 0; col < n; col++) 
            boardArr.map(el => el[col])
                .sort((a,b) => a === 0 && b !== 0 ? -1 : a !== 0 && b === 0 ? 1 : 0)
                .forEach((val, idx) => boardArr[idx][col] = val)
        if (flag === result) break
    }
    return result
}