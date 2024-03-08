function solution(my_string) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = lower.toUpperCase();
    
    const baseArr = `${upper}${lower}`.split('')
    const strArr = my_string.split('');
    return baseArr.map(baseChar => strArr.filter(char => baseChar === char).length)
}