function solution(numbers) {
    const firstSort = numbers.reduce((acc, num) => {
        const cur = `${num}`;
        const firstChar = cur[0];
        if (!acc[firstChar]) acc[firstChar] = [];
        acc[firstChar].push(cur);
        return acc;
    }, {});
    
    const secondSort = Object.entries(firstSort).map(([num, arr]) => {
        if (arr.length > 1) arr.sort((a,b) => +(a + b) - +(b + a) > 0 ? -1 : 1);
        return [+num, arr];
    })
    
    if (secondSort.length === 1 && secondSort[0][0] === 0) return '0';
    
    secondSort.sort((a, b) => b[0] - a[0]);
    return secondSort.reduce((acc, [_, sortedArr]) => acc + sortedArr.join(''), '');
}