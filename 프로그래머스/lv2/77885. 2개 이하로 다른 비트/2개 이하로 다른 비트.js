function solution(numbers) {
    return numbers.map((num) => {
        const bin = num.toString(2)
        if (bin.at(-1) === 0) return num+1
        const binLen = bin.length
        
        let power = 0
        while (true) {
            const nextNum = num+2**power
            const nextBin = nextNum.toString(2)
            const nextLen = nextBin.length
            
            let diffCnt = 0
            const diff = nextLen - binLen
            if (binLen < nextLen) diffCnt += diff
            const comp = nextBin.slice(diff)
            for (let j = 0; j < binLen; j++) {              
                if (comp[j] !== bin[j]) {
                    diffCnt++
                    if (diffCnt === 3) break
                }
            }
            if (diffCnt <= 2) return nextNum
            power++
        }
    })
}