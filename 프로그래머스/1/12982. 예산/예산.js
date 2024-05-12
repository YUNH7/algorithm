function solution(d, budget) {
    return d.sort((a, b) => a-b).reduce((a, c) => {
        budget -= c;
        if (budget >= 0) a++;
        return a;
    }, 0);
}