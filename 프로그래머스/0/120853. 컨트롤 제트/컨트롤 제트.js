function solution(s) {
    return s.split(' ').reduce((a, c) => {
        if (c === 'Z') a.result -= a.before;
        else a.result += +c;
        a.before = c;
        return a;
    }, {before: 0, result: 0}).result
}