function solution(want, number, discount) {
    const exceptArr = discount.reduce((a, c, i) => {
        if (!want.includes(c)) a.push(i);
        return a;
    }, []);
    exceptArr[-1] = -1;
    exceptArr.push(discount.length);
    const fruits = want.reduce((a, c, i) => {
        a[c] = number[i];
        return a;
    }, {});
    return exceptArr.reduce((acc, idx, i, arr) => {
        for (let j = arr[i-1] + 1; j + 10 <= idx; j++) {
            const list = discount.slice(j, j+10).reduce((a, c) => {
                a[c] = (a[c] || 0) + 1;
                return a;
            }, {});
            if (Object.entries(list).every(([key, num]) => num === fruits[key])) acc++
        }
        return acc;
    }, 0);
}