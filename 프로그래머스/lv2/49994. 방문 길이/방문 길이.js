function solution(dirs) {
    const board = new Array(11).fill(0).map(el => new Array(11).fill(''))
    const direction = {
        U: { opposite: 'D', coordinate: [-1,0] }, 
        D: { opposite: 'U', coordinate: [1,0] }, 
        R: { opposite: 'L', coordinate: [0,1] }, 
        L: { opposite: 'R', coordinate: [0,-1] }
    }
    let now = [5,5]
    const inBoard = ([r, c]) => r >= 0 && r <= 10 && c >= 0 && c <= 10
    for (let i = 0; i < dirs.length; i++) {
        const { coordinate:[r,c], opposite } = direction[dirs[i]]
        const next = [r+now[0], c+now[1]]
        if (next[0] >= 0 && next[0] <= 10 && next[1] >= 0 && next[1] <= 10) {
            if (!board[now[0]][now[1]].includes(dirs[i])) {
                board[now[0]][now[1]] += dirs[i]
                board[next[0]][next[1]] += opposite
            }
            now = next
        }
    }
    return board.flat().reduce((a,c) => a+c.length, 0) / 2
}