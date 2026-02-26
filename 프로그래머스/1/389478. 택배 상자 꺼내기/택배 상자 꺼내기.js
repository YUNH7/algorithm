function solution(n, w, num) {
    const topLine = Math.ceil(n / w);
    const targetLine = Math.ceil(num / w);
    
    const getIndex = (row, num) => row % 2 ? (num-1) % w :  w - 1 - (num-1) % w;
    const topIdx = getIndex(topLine, n);
    const numIdx = getIndex(targetLine, num);
    
    const isPlus = topLine % 2 && topIdx >= numIdx || !(topLine % 2) && topIdx <= numIdx;
    
    return topLine - targetLine + Number(isPlus)
}