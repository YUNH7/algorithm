function solution(s) {
    return [...s].filter(c => s.indexOf(c) === s.lastIndexOf(c)).sort().join('');
}