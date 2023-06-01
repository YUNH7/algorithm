function solution(s) {
    return s
        .split(' ')
        .map(word => word === '' 
             ? '' 
             : word[0].toUpperCase()+word.slice(1).toLowerCase())
        .join(' ')
}