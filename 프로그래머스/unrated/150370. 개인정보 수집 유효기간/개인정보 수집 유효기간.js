function solution(today, terms, privacies) { // 오늘 날짜, '약관 개월', '수집일 약관'
    // { 약관: 개월, ... }
    const termObj = terms.reduce((a, c) => {
        const [term, month] = c.split(' ');
        a[term] = month;
        return a;
    }, {});
    
    const T = new Date(today)    
    return privacies.reduce((a, p, i) => {
        const [date, term] = p.split(' ');
        const [y, m, d] = date.split('.');
        const mm = +m + +termObj[term]
        if (T >= new Date(+y + Math.floor(mm/12), (mm%12) - 1, +d)) a.push(i+1)
        return a
    }, [])
}