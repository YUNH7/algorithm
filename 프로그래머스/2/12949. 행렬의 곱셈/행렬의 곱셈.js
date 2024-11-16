function solution(arr1, arr2) {
    return arr1.map((_, i) => arr2[0].map((_, j) => {
        let sum = 0;
        for (let idx = 0; idx < arr1[0].length; idx++) sum += arr1[i][idx]*arr2[idx][j];
        return sum;
    }));
}