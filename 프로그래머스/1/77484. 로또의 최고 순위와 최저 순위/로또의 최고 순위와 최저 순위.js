function solution(lottos, win_nums) {
    return lottos.reduce((a, c) => {
        if (c === 0) a[0]++;
        else if (win_nums.includes(c)) {
            a[0]++;
            a[1]++;
        }
        return a;
    }, [0, 0]).map(score => 7 - (score || 1));
}