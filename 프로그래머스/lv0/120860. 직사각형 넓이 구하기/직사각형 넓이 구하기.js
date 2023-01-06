function solution([base, ...rest]) {
    return rest.reduce((acc, cur) => {
        let value = 1
        if(cur[0] === base[0]) {
            value = Math.abs(cur[1] - base[1])
        }
        if(cur[1] === base[1]) {
            value = Math.abs(cur[0] - base[0])
        }
        return acc * value
    }, 1)
}