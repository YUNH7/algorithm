function solution(players, callings) { // 현재 등수, 추월 배열
    const idxObj = {}
    callings.forEach((calling) => {
        if (idxObj[calling] === undefined) idxObj[calling] = players.indexOf(calling)
        const idx = idxObj[calling]
        const tmp = players[idx - 1]
        players[idx - 1] = calling
        players[idx] = tmp
        idxObj[tmp] = idx
        idxObj[calling]--
    })
    return players
}