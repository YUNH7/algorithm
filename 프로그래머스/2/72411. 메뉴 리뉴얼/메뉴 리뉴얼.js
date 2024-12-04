function solution(orders, course) {    
    const result = Object.fromEntries(course.map(n => [n, {}]));
    orders.forEach((o) => {
        const order = [...o].sort();
        course.forEach((n) => {
            const aux = (food, start) => {
                if (food.length === n) result[n][food] = (result[n][food] || 0) + 1;
                for (let i = start; i < order.length; i++) aux(food + order[i], i + 1);
            }
            aux('', 0);
        })
    })
    
    return Object.values(result).map(nCourses => {
        const max = Object.values(nCourses).reduce((a, c) => a < c ? c : a, 0);
        return max !== 1 ? Object.keys(nCourses).filter(food => nCourses[food] === max) : [];
    }).flat().sort();
}