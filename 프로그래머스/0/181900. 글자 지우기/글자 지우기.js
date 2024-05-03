function solution(my_string, indices) {
    return [...my_string].filter((c, i) => !indices.includes(i)).join('');
}