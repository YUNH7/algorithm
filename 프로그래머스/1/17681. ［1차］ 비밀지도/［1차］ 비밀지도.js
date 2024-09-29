function solution(n, arr1, arr2) { // 벽 1 공백 0 리턴 # ' '
    const first = arr1.map(el => [...el.toString(2).padStart(n, '0')]);
    const second = arr2.map(el => [...el.toString(2).padStart(n, '0')]);
    return first.map((el, i) => el.map((num, j) => (+num || +second[i][j]) ? '#': ' ').join(''));
}