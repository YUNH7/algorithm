function solution(record) {
    const {uidNickPair, result} = record.reduce((acc, str) => {
        const [action, uid, nick] = str.split(' ');
        if (action !== 'Leave') acc.uidNickPair[uid] = nick;
        if (action !== 'Change') acc.result.push({action, uid});
        return acc;
    }, {uidNickPair: {}, result: []});
    
    return result.map(({action, uid}) => `${uidNickPair[uid]}님이 ${action === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`)
    
}