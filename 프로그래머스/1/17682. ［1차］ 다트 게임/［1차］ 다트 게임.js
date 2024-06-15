function solution(dartResult) {
    const calcScore = {
        S: n => n,
        D: n => n ** 2,
        T: n => n ** 3,
        '*': n => n * 2,
        '#': n => n * -1,
        undefined: n => n
    }
    return dartResult.match(/\d+\D+/g).reduce((a, c, i, arr) => {
        const [score, area, award] = c.match(/\d+|\D|\*|#/g);
        const nextAward = arr[i+1]?.includes('*') ? '*': undefined;
        const curScore = calcScore[nextAward](calcScore[award](calcScore[area](+score)));
        return a + curScore;
    }, 0)
}