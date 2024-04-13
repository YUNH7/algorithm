function solution(age) {
    const ageArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return String(age).split('').map(n => ageArr[n]).join('');
}