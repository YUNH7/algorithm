function solution(n) {
    const binaryN = n.toString(2);
    const hasOne = binaryN.match(/1/g).length;
    let result = n+1;
    
    while(result.toString(2).match(/1/g).length !== hasOne) {
        result += 1
    }
    
    return result;
}