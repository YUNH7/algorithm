function solution(arr, flag) {
    return flag.reduce((acc, boolean, i) => boolean 
            ? acc.concat(new Array(arr[i]*2).fill(arr[i])) 
            : acc.slice(0, -arr[i])
            , []);
}