function solution(arr1, arr2) {    
    return arr1.map((el, i) => el.map((val,j) => val+arr2[i][j]))    
}