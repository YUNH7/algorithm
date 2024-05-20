const isPrime = (n) => {
    if (n === 2) return true;
    if (n === 1 || n % 2 === 0) return false;
    for (let i = 3; i < n; i+=2) if (n % i === 0) return false;
    return true;
}

function solution(numbers) {
    const allNumbers = [];
    const makeNumber = (bucket, base) => {
        for (let i = 0; i < bucket.length; i++) {
            const nowN = base + bucket[i];
            allNumbers.push(nowN);
            const newBucket = [...bucket];
            newBucket.splice(i, 1);
            makeNumber(newBucket, nowN);
        }
    }
    
    makeNumber([...numbers], '');
    return [...new Set(allNumbers.map(el => +el))].filter(n => isPrime(n)).length;
}