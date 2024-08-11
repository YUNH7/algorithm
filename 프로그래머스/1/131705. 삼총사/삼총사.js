function solution(number) {
    let result = 0;
    const aux = (bucket, start) => {
        if (bucket.length === 3) {
            if (bucket.reduce((a, c) => a+c, 0) === 0) result++
            return;
        } 
        
        for (let i = start; i < number.length; i++) 
            aux([...bucket, number[i]], i+1)        
    }
    aux([], 0);
    return result;
}