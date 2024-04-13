function solution(my_string, m, c) {
    const val = my_string.length / m;
    return new Array(val)
        .fill(0)
        .map((_, i) => my_string.slice(i * m, (i+1) * m)[c-1])
        .join('');
}