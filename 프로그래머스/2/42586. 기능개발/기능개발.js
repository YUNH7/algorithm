function solution(progresses, speeds) {
    const queue = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    const result = [];
    let first;
    queue.forEach(el => {
        if (el <= first) result[result.length - 1] += 1;
        else {
            result[result.length] = 1;
            first = el;
        }
    })
    return result;
}