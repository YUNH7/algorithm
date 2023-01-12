function solution(box, n) {
    return box.reduce((acc, cur) => acc*parseInt(cur/n), 1)
}