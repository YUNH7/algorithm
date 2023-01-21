function solution(lines) {
    let overlap = {}
    for (let line of lines) {
        for (let i = line[0] + 1; i <= line[1]; i++) {
            if (!overlap[i]) {
                overlap[i] = 0
            }
            overlap[i]++
        }
    }
    return Object.values(overlap).filter(el => el >=2).length
}