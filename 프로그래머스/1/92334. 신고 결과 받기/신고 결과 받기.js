function solution(id_list, report, k) {
    const reportedId = report.reduce((a, c) => {
        const [reporter, villain] = c.split(' ');
        if(!a[villain]) a[villain] = new Set();
        a[villain].add(reporter);
        return a;
    }, {});
    
    const reporters = Object.values(reportedId).filter(set => set.size >= k).map(set => [...set]).flat();
    
    const mailingList = reporters.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    }, {});

    return id_list.map(id => mailingList[id] || 0);
}