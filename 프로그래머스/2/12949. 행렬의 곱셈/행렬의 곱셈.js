function solution(arr1, arr2) {
    return arr1.map((_, i) => arr2[0].map((_, j) => arr1[0].reduce((a, c, idx) => a + arr1[i][idx]*arr2[idx][j], 0)));
}