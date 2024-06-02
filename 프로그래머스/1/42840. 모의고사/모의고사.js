function solution(answers) {
    const students = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    return answers
        .reduce((a, key, i) => students
            .map(answers => answers[i % answers.length])
                .map((answer, idx) => a[idx] + +(answer === key))
        , [0, 0, 0])
        .reduce((acc, score, i, arr) => {
            if (Math.max(...arr) === score) acc.push(i+1)
            return acc;
        }, []);
}