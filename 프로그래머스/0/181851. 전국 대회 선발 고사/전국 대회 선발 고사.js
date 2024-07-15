function solution(rank, attendance) {
    const [a, b, c] = rank.filter((_, i) => attendance[i]).sort((a,b) => a-b).map(el => rank.indexOf(el));
    return 10000*a + 100*b + c;
}