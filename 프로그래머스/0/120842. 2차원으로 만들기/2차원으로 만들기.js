function solution(num_list, n) {
    return new Array(num_list.length / n).fill(0).map((_, i) => num_list.slice(i * n, (i+1) * n));
}