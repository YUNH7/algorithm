function solution(board, k) {
    return board.reduce((acc, cur, i) => {
        cur.forEach((el, j) => {
            if (i + j <= k) acc += el
        });
        return acc;
    }, 0)
}