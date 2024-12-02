function solution(participant, completion) {
    const finish = completion.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    }, {});
    
    for (let name of participant) {
        if (!finish[name]) return name;
        finish[name] -= 1;
    }
}