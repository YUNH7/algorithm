function solution(genres, plays) {
    const summary = genres.reduce((acc, genre, idx) => {
        if (!acc[genre]) acc[genre] = {plays: 0, nums: []};
        acc[genre].plays += plays[idx];
        acc[genre].nums.push(idx);
        return acc;
    }, {});
    return Object.values(summary)
        .sort((a, b) => b.plays - a.plays)
        .map(({nums}) => nums
             .sort((a, b) => plays[b] === plays[a] ? a - b : plays[b] - plays[a])
             .slice(0, 2)
             .map((i) => +i))
        .flat();
}