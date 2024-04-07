function solution(a, b) {
    const aArr = a.split('').reverse();
    const bArr = b.split('').reverse();
    
    const result = [];
    
    for (let i = 0; i < Math.max(aArr.length, bArr.length); i++) {
        const aNum = (+aArr[i] || 0);
        const bNum = (+bArr[i] || 0);
        let curNum = (result[i] || 0) + aNum + bNum;
        
        if (curNum >= 10) {
            result[i+1] = 1
            result[i] = curNum - 10;
        } else {
            result[i] = curNum;
        }
    }

    return result.reverse().join('')
}