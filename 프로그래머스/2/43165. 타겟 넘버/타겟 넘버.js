function solution(numbers, target) {
    let result = 0;
    const aux = (i, k) => {
        if (i === numbers.length) {
            if (k === target) result += 1
            return;
        }
        aux(i+1, k+numbers[i]);
        aux(i+1, k-numbers[i]);
    }
    aux(0, 0);
    return result;
}