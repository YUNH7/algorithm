function solution(my_string) {
    return 'aeiou'
        .split('')
        .reduce((acc, cur) => acc.split(cur).join(''), my_string)
}