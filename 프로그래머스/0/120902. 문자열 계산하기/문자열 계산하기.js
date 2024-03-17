function solution(my_string) {
    const signObj = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
    };
    let sign = '';
    
    return my_string
        .split(' ')
        .reduce((acc, cur) => {
            if (Number(cur) >= 0) return signObj[sign](+acc, +cur);
            sign = cur;
            return acc;
        })
}