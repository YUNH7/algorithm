function solution(num_list) {
    const sum = num_list.reduce((a,c) => a+c, 0)
    const mul = num_list.reduce((a,c) => a*c, 1)
    return sum**2 > mul ? 1 : 0 
}