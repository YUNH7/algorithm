function solution(age) {
    return String(age).split('').map(n => 'abcdefghij'[n]).join('');
}