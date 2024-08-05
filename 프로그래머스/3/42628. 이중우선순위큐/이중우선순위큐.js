function solution(operations) {
    const getMax = (arr) => arr.reduce((a, c) => a < c ? c : a, arr[0]);
    const getMin = (arr) => arr.reduce((a, c) => a > c ? c : a, arr[0]);
    const result = operations.reduce((acc, c) => {
        const [order, num] = c.split(' ');
        if (order === 'I') acc.push(+num);
        else if (acc.length) 
            acc.splice(num === '1' ? acc.indexOf(getMax(acc)) : acc.indexOf(getMin(acc)), 1);
        return acc;
    }, []);
    
    return result.length ? [getMax(result), getMin(result)] : [0, 0];
}