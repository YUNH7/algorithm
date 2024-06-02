function solution(arr) {
    return +arr.every((subArr, i) => subArr.every((el, j) => el === arr[j][i]));
}