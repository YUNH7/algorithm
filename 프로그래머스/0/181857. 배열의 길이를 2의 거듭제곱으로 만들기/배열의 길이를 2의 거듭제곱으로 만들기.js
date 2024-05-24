function solution(arr) {
    const len = (() => {
        for (let i = 0; i <= Math.sqrt(arr.length) + 1; i++) 
            if (arr.length <= 2 ** i) return 2 ** i;
    })();
    return arr.concat(new Array(len - arr.length).fill(0));
}