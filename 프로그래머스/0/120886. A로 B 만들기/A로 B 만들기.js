function solution(before, after) {
    return +[...after].every(c => {
        const idx = before.indexOf(c);
        if (idx !== -1) {
            before = before.slice(0, idx) + before.slice(idx+1);
            return true;
        }
        return false;
    });
}