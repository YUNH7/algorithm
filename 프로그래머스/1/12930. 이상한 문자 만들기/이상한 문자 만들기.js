function solution(s) {
    return s
        .split(/\s/)
        .map(str => [...str].map((c, i) => i % 2 ? c.toLowerCase() : c.toUpperCase()).join(''))
        .join(' ');
}