function solution(files) {
    const headObj = files.reduce((a,c) => {
        const [head] = c.split(/[0-9]/)
        const key = head.toLowerCase()
        if (!a[key]) a[key] = []
        const num = parseInt(c.split(head)[1])
        a[key].push({num, file: c})
        return a
    }, {})
    
    return Object.entries(headObj)
        .sort((a,b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)
        .map(([_,arr]) => arr.sort((a,b) => a.num-b.num).map(file => file.file))
        .flat()
}