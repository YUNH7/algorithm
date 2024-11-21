function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.at(-1) === s[i]) stack.pop();
        else stack.push(s[i]);
    }
    return Number(!stack.length);
}