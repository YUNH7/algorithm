function solution(n, m, section) {
    return section.slice(1).reduce((a,c) => {
        if (a.start + m - 1 < c) {
            a.result += 1;
            a.start = c;
        }
        return a;
    }, {start: section[0], result: 1}).result;
}