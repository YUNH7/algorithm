function solution(elements) {
    const set = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        const array = elements.slice(i).concat(elements.slice(0, i));
        for (let j = 0; j < elements.length; j++) {
            sum += array[j];
            set.add(sum)
        }
    }
    return set.size;
}