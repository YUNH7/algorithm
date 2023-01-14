function solution(board) {
    let bombAddress = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j]) {
                bombAddress.push([i,j])
            }
        }
    }
    
    for (let bomb of bombAddress) {
        for (let i = 0; i < board.length; i++) {
            
            if (bomb[0] === i) {
                board[i][bomb[1]-1] = 2
                board[i][bomb[1]+1] = 2
            }
            if (bomb[0]-1 === i) {
                board[i][bomb[1]-1] = 2
                board[i][bomb[1]+1] = 2
                board[i][bomb[1]] = 2
            }
             if (bomb[0]+1 === i) {
                board[i][bomb[1]-1] = 2
                board[i][bomb[1]+1] = 2
                board[i][bomb[1]] = 2
            }
            
        }
    }
    return board.reduce((acc, cur) => {
        return acc + cur.reduce((c,d) => {
            if (d === 0) {
                return c + 1
            } else {
                return c
            }
        }, 0)
    }, 0)  
}
