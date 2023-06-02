function solution(s) {
    let repeat = 0;
    let zero = 0;
    
    while(s !== '1') {
        repeat++
        
        let len = s.length
        let slen = s.replace(/0/g,'').length;
        zero += len - slen
        s = slen.toString(2)
    }
    return [repeat, zero]
}