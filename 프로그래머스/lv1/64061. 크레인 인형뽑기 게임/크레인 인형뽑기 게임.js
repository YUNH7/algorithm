function solution(board, moves) {    
    const sortBoard = board.reduce((newArr, dollArr) => {
        dollArr.forEach((doll, idx) => doll !== 0 && newArr[idx].push(doll))
        return newArr
    }, new Array(board.length).fill(0).map(el => new Array()))
    
    const bucket = []
    let result = 0
    
    moves.forEach(move => {
        const doll = sortBoard[move - 1].shift()
        if (doll && bucket[bucket.length - 1] === doll) {
            result+=2
            bucket.pop()
        } else {
            bucket.push(doll)
        }
    })
    return result
}