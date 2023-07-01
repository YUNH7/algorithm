function solution(n, result=n+1) {
    return n.toString(2).match(/1/g).length == result.toString(2).match(/1/g).length 
        ? result 
        : solution(n,result+1);
}