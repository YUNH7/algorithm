function solution(age) {
    const ageArr = 'abcdefghij'.split('');
    return String(age).split('').map(n => ageArr[n]).join('');
}