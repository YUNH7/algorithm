function solution(score) {
    const average = score.map(([eng, math]) => (eng + math) / 2);
    const rank = [...average].sort((a, b) => b - a);
    return average.map(el => rank.indexOf(el) + 1);
}