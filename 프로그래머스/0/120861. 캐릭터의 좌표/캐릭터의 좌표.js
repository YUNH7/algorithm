function solution(keyinput, board) {
    const [boardX, boardY] = board.map(el => Math.floor(el / 2));
    const isInBoardX = (x) => Math.abs(x) <= boardX;
    const isInBoardY = (y) => Math.abs(y) <= boardY;
    const move = {
        left: ([x, y]) => [isInBoardX(x-1) ? x-1 : x , y],
        right: ([x, y]) => [isInBoardX(x+1) ? x+1 : x, y],
        up: ([x, y]) => [x, isInBoardY(y+1) ? y+1 : y],
        down: ([x, y]) => [x, isInBoardY(y-1) ? y-1 : y]
    }
    
    return keyinput.reduce((a, dir) => move[dir](a), [0, 0]);
}