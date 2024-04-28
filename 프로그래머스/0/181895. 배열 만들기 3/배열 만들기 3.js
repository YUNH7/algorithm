function solution(arr, intervals) {    
    return intervals.map(([a, b]) => arr.slice(a, b+1)).flat();
}