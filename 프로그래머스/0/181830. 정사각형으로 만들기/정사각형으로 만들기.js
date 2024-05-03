function solution(arr) {
    const row = arr.length;
    const column = arr[0].length;
    return row === column 
        ? arr 
        : row > column 
        ? arr.map(el => el.concat(new Array(row - column).fill(0)))
        : arr.concat(new Array(column - row).fill(new Array(column).fill(0)));
}