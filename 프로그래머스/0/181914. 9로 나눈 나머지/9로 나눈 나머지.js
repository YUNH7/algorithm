function solution(number) {
    return number.split('').reduce((a,c) => a + +c, 0) % 9
}