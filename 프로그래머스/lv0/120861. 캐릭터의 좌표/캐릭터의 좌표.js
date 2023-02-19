function solution(keyinput, board) { // 방향키 배열, 맵 크기
    const move = {up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0]}
    let location = [0, 0]
    const pos = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    for (let key of keyinput) {
        const tmp = location.slice()
        tmp[0] += move[key][0]
        tmp[1] += move[key][1]
        if (Math.abs(tmp[0]) <= pos[0] && Math.abs(tmp[1]) <= pos[1]) {
            location = tmp
        }
    }
    // 캐릭터 좌표
    return location;
}