function solution(n) {
    const binaryN = n.toString(2);
    const hasOne = binaryN.match(/1/g).length;
    let returnN = binaryN;
    
    const plus1Bin = (binary) => {
        let result = binary.slice().split('');
        let trigger = true 
        for (let i = binary.length - 1; i >= 0; i-- ) {
            if (binary[i] === '0' && trigger) {
                result[i] = '1';
                trigger = false;
            } else if(binary[i] === '1' && trigger) {
                result[i] = '0';
            }
        }
        
        return trigger ? '1' + result.join('') : result.join('');
    }
    
    returnN = plus1Bin(returnN)
    while(returnN.match(/1/g).length !== hasOne) {
        returnN = plus1Bin(returnN)
    }
    return parseInt(returnN,2)
}