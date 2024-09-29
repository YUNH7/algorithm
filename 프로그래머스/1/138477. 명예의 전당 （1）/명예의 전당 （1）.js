function solution(k, score) {
    const rank = [];
    return score.map(el => {
        rank.push(el);
        rank.sort((a, b) => a - b);
        if (rank.length > k) rank.shift();
        return Math.min(rank[0]);
    })
}