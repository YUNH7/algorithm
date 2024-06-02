function solution(board, k) {
    return board.reduce((acc, arr, i) => arr.reduce((a, el, j) => i + j <= k ? a += el : a, acc), 0)
}