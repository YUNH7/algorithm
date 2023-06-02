function solution(s) {
    let repeat = 0;
    let zero = 0;
    
    while(s !== '1') {
        repeat++
        
        let slen = s.replace(/0/g,() => {
            zero++
            return ''
        }).length;
        
        s = slen.toString(2)
    }
    return [repeat, zero]
}