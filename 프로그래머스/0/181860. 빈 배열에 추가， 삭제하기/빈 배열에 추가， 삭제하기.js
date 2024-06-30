function solution(arr, flag) {
    return arr.reduce((acc, el, i) => 
        flag[i] ? [...acc, ...new Array(el * 2).fill(el)] : acc.slice(0, -el), []);
}