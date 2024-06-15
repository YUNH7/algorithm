const makeOne = (num, divided) => {
    if (num === 1) return divided;
    
    return makeOne(num % 2 ? (num-1) / 2 : num / 2, divided+1);
}

function solution(num_list) {
    return num_list.reduce((a, c) => a + makeOne(c, 0), 0)
}