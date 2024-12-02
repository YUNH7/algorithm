function solution(id_list, report, k) {
    const reportedId = [...new Set(report)].reduce((a, c) => {
        const [reporter, villain] = c.split(' ');
        if(!a[villain]) a[villain] = [];
        a[villain].push(reporter);
        return a;
    }, {});
    
    const reporters = Object.values(reportedId).filter(arr => arr.length >= k).flat();
    
    const mailingList = reporters.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    }, {});
    
    return id_list.map(id => mailingList[id] || 0);
}