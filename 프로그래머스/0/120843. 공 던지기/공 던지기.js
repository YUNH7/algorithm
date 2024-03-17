function solution(numbers, k) {
    const order = numbers.length % 2 === 0 
        ? [...numbers.filter((_, i) => i % 2 === 0)]
        : [...numbers.filter((_, i) => i % 2 === 0), ...numbers.filter((_, i) => i % 2 === 1)];
    const idx = (k-1) % order.length;
    return order[idx];
}