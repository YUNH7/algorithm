function solution(arr) {
    const stk = [];
    let i = 0;
    
    while (i < arr.length) {
        const el = arr[i];
        if (stk.length === 0 || stk.at(-1) < el) {
            stk.push(el);
            i++;
        } else if (stk.at(-1) >= el) stk.pop();
    }
    
    return stk;
}