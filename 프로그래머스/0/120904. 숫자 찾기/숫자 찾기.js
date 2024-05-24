function solution(num, k) {
    const index = String(num).indexOf(k);
    return index === -1 ? index : index + 1;
}