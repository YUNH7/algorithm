function solution(array) {
    const numObj = array.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    }, {});
    const [first, second] = Object.entries(numObj).sort((a, b) => b[1] - a[1]);
    return first[1] === second?.[1] ? -1 : +first[0];
}