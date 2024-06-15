function solution(my_string) {
    return [...my_string].map((_, i) => my_string.slice(i)).sort();
}