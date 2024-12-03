function solution(w, n, list) {
    let total = 0;
    const want = w.reduce((a, el, idx) => {
        a[el] = n[idx];
        total += n[idx];
        return a;
    }, {});
    
    const queue = list.reduce((a, c, i) => {
        if (!w.includes(c)) a.push(i);
        return a;
    }, [-1]);
    
    return queue.reduce((acc, idx, i, a) => {
        const arr = list.slice(idx+1, a[i+1] ?? list.length);
        if (arr.length >= total) {
            const obj = Object.fromEntries(w.map(el => [el, 0]));
            for (let j = 0; j < arr.length; j++) {
                obj[arr[j]] += 1;
                if (j >= total - 1) {
                    if (Object.entries(obj).every(([el, num]) => num === want[el])) acc += 1;
                    obj[arr[j - total + 1]] -= 1;
                }
            }
        }
        return acc;
    }, 0);
}