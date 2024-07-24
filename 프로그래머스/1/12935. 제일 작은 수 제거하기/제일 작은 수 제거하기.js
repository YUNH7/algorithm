function solution(arr) {
    const min = arr.reduce((a, c) => a < c ? a : c);
    return arr.length === 1 ? [-1] : arr.filter(el => el !== min);
}