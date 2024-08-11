function solution(quiz) {
    const calcFn = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    return quiz.map(el => {
        const [a, sign, b, , result] = el.split(' ');
        return calcFn[sign](+a, +b) === +result ? 'O' : 'X';
    });
}