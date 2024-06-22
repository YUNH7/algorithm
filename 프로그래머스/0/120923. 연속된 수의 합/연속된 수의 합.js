function solution(num, total) {
    const aux = (bucket) => {
        const sum = bucket.reduce((a, c) => a + c, 0);
        const dif = total - sum;
        const first = bucket[0] - 1;
        const last = bucket.at(-1) + 1; 
        
        if (dif === 0 && bucket.length === num) return bucket;
        
        if (dif < last) return aux([first, ...bucket]);
        if (dif === last) return aux([...bucket, last]);
        return aux([first, ...bucket, last])
    }
    
    return aux([Math.ceil(total/num)]);
}