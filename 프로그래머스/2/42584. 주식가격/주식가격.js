function solution(prices) {
    const len = prices.length;
    const result = new Array(len).fill(0);
    
    const stack = [0];
    let now = 1;
    while (now !== len) {
        const prev = stack.at(-1) ?? now;        
        if (prices[prev] <= prices[now]) {
            stack.push(now);
            now += 1;
        } else {
            stack.pop();
            result[prev] = now - prev;
        }
    }
    return result.map((sec, i) => sec || len-i-1);
}