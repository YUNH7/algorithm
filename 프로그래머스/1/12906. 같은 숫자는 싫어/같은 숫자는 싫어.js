function solution(arr) {
    return arr.filter((el, i) => el !== arr[i-1]);
}