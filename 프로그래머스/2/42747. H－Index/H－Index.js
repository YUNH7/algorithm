function solution(citations) {
    citations.sort((a,b) => a-b);
    const n = citations.length;
    for (let i = n-1; i >= 0; i--) 
        for (let j = citations[i]; j > citations[i-1]; j--)
            if (j <= n - i) return j;

    return citations[0] > n ? n : citations[0];
}