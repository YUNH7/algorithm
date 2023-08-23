function solution(maps) {
    const m = maps.length - 1
    const n = maps[0].length - 1
    
    const stack = [{now: [0, 0], score: 1, prev: ''}]
    const dir = {
        U: {cdn: [-1, 0], opposite: 'D'}, 
        D: {cdn: [1, 0], opposite:'U'}, 
        R: {cdn: [0, 1], opposite:'L'}, 
        L: {cdn: [0, -1], opposite: 'R'}
    }
    const savePath = (now, score, prev) => {
        for (let d in dir) {
            if (d !== prev) {
                const {cdn, opposite} = dir[d]
                const next = [now[0]+cdn[0], now[1]+cdn[1]]
                if (next[0]>=0 && next[0]<=m && next[1]>=0 && next[1]<=n && maps[next[0]][next[1]])
                stack.push({now: next, score, prev: opposite})
            } 
        }
    }
    let result = 0
    while (stack.length) {
        const {now, score, prev} = stack.shift()
        if (now[0] === m && now[1] === n) return score
        if (!maps[now[0]][now[1]]) continue
        maps[now[0]][now[1]] = 0
        savePath(now, score+1, prev)
    }
    
    return -1
}