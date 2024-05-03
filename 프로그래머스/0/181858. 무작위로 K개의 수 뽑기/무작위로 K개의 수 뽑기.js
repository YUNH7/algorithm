function solution(arr, k) {
    const random = [...new Set(arr)].slice(0, k);
    const randomLen = random.length;
    return randomLen === k ? random : random.concat(new Array(k - randomLen).fill(-1));
}