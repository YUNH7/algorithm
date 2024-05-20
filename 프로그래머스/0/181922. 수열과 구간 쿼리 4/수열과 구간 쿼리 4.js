function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        for (let i = 0; i <= arr.length; i += k) if (s <= i && i <= e) arr[i]++;
    })
    return arr;
}