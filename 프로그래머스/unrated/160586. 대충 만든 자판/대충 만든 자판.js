function solution(keymap, targets) { // 키패드, 입력하려는 문자
    const key = {}
    keymap.forEach(map => {
        [...map].forEach((m, i) => {
            if (key[m] === undefined || key[m] > i+1) key[m] = i+1
        })
    })
    
    return targets.map(target => 
        [...target].reduce((acc, cur) => {
            if (acc === -1 || !key[cur]) return -1
            return acc + key[cur]
    }, 0))
}