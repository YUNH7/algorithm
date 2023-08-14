function solution(record) {
    const nameObj = {}
    
    return record.filter(r => {
        const [type, id, name] = r.split(' ')
        if (type !== 'Leave') nameObj[id] = name
        return type !== 'Change'
    }).map(r => {
        const [type, id, name] = r.split(' ')       
        const msg = type === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.'
        return `${nameObj[id]}${msg}`
    })
}