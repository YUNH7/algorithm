function solution(arr, flag) {
    return arr.reduce((acc, el, i) => {
        if (flag[i]) return [...acc, ...new Array(el * 2).fill(el)];
        return acc.slice(0, -el);
    }, []);
}