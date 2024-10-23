function solution(s) {
    const bracket = { '[': ']', '{': '}', '(': ')' };
    const open = Object.keys(bracket);
    for (let i = 0; i < s.length; i++) {
        const str = s.slice(i) + s.slice(0, i);
        const stack = [];
        let result = 0;
        for (let j = 0; j < str.length; j++) {
            const now = str[j];
            if (open.includes(now)) stack.push(now);
            else if (now === bracket[stack.pop()]) {
                if (stack.length === 0) result += 1;
            } else {
                result = 0;
                break;
            }
        }
        
        if (stack.length === 0 && result !== 0) return result;
    }
    return 0;
}