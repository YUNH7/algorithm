function solution(my_string, indices) {
    return [...my_string].filter((_, i) => !indices.includes(i)).join('');
}