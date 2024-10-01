function solution(prices) {
    const result = new Array(prices.length).fill(0);
    const len = prices.length;
    
    const stack = [0];
    let i = 1;
    while (i !== len) {
        const idx = stack.pop() ?? i;
        if (idx === i) i += 1;
        
        if (prices[idx] <= prices[i]) {
            stack.push(idx);
            stack.push(i);
            i++;
        } else result[idx] = i - idx;
    }
    return result.map((sec, i) => sec === 0 ? len-1-i: sec);
}