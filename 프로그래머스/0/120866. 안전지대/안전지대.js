function solution(board) {
    const place = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];
    const findSafeZone = (i, j) => place.every(([x, y]) => {
        const [nearX, nearY] = [i-x, j-y];
        return (nearX >= 0 && nearY >= 0 && nearX < board.length && nearY < board.length) 
            ? !board[nearX][nearY]
            : true;
    });
    
    
    return board.reduce((acc, arr, i) => acc + arr.reduce((a, _, j) => a + Number(findSafeZone(i, j)), 0), 0);
}