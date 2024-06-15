function solution(i, j, k) {
    const regExp = new RegExp(`${k}`, 'g');
    return new Array(j-i+1).fill(i).reduce((a, c, i) => a + (`${c+i}`.match(regExp)?.length || 0), 0);
}