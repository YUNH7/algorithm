function solution(strings, n) {
    return strings.sort((a, b) => {
        const [asciiA, asciiB] = [a.charCodeAt(n), b.charCodeAt(n)];
        const dif = asciiA - asciiB;
        if (dif > 0) return 1;
        if (dif < 0) return -1;
        if (dif === 0) {
            const tempSort = [a, b].sort();
            if (tempSort[0] === a) return -1;
            else return 1;
        }
    });
}