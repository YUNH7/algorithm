function solution(arr1, arr2) {
    return [...new Array(arr1.length)].map((_, i) => [...new Array(arr2[0].length)].map((_, j) => {
        let sum = 0;
        for (let idx = 0; idx < arr1[0].length; idx++) sum += arr1[i][idx]*arr2[idx][j];
        return sum;
    }))
}