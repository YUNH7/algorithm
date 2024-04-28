function solution(friends, gifts) {
    // 친구들이름, 선물 기록
    // 두 사람 중 선물을 더 많이 준 사람이 선물+1
    // 두 사람 사이 선물 내역이 없거나 같다면 선물 지수가 더 큰 사람이 선물+1
    // 선물지수 = 이번달 준 선물 - 받은 선물
    // 만약 선물지수도 같다면 선물+0
    // return 선물을 가장 많이 받을 친구의 선물 수
    // {[친구]: {선물지수: 0, list: {[다른친구]: 0}}}
    const indexObj = gifts.reduce((acc, cur) => {
        const [A, B] = cur.split(' ');
        if (!acc[A]) acc[A] = {index: 0, list: {}};
        if (!acc[B]) acc[B] = {index: 0, list: {}};
        acc[A].index++;
        acc[B].index--;
        if (!acc[A].list[B]) acc[A].list[B] = 0;
        acc[A].list[B]++
        return acc;
    }, {});
    
    const result = friends.reduce((presentObj, friend, idx) => {
        presentObj[friend] = friends.slice(idx+1).reduce((acc, cur) => {
            
            const give = indexObj[friend]?.list[cur] || 0;
            const given = indexObj[cur]?.list[friend] || 0;
            const giveIndex = indexObj[friend]?.index || 0;
            const givenIndex = indexObj[cur]?.index || 0;
            if (give > given || (give === given && giveIndex > givenIndex)) acc++;
            else if (give < given || (give === given && giveIndex < givenIndex)) presentObj[cur]++

            return acc;
        }, presentObj[friend])
        return presentObj;
    }, friends.reduce((a, c) => {
        a[c] = 0;
        return a;
    }, {}))
    return Math.max(...Object.values(result))
}