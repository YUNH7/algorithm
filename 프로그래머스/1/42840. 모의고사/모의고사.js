function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [first, second, third].map(arr => {
        const len = arr.length;
        return answers.filter((a, i) => a === arr[i % len]).length;
    });
    return result.reduce((a, c, i) => {
        if (c === Math.max(...result)) a.push(i+1);
        return a;
    }, [])
}