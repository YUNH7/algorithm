const check = {
    w: (n, result) => n + 1 === result,
    s: (n, result) => n - 1 === result,
    d: (n, result) => n + 10 === result,
    a: (n, result) => n - 10 === result,
    
}

function solution(numLog) {
    return numLog.reduce((acc, cur, i) => acc + (Object.keys(check).find(key => check[key](cur, numLog[i+1])) || ''), '')
}