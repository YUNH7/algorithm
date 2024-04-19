function solution(numbers, direction) {
    return direction === 'left' 
        ? [...numbers.slice(1), numbers[0]]
        : [numbers.at(-1), ...numbers.slice(0, -1)];
}