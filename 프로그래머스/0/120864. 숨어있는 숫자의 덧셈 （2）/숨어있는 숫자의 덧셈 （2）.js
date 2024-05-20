function solution(my_string) {
    return my_string.match(/\d+/g)?.reduce((a,c) => a + +c, 0) || 0
}