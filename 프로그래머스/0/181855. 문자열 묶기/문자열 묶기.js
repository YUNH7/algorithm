function solution(strArr) {
    return Math.max(...strArr.reduce((a, c) => {
        a[c.length] = a[c.length]+1 || 1;
        return a;
    }, [0]));
}