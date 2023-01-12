function solution(my_string) {
    return my_string.split('')
        .filter(el => !Number.isNaN(Number(el)))
        .map(el => Number(el))
        .sort((a,b) => a - b)
    
}