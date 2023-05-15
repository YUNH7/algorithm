function solution(numbers, hand) { // 번호 배열, "left"/"right"(왼손/오른손잡이)
    // 147 L, 369 R, 2580 가까운 손
    const LKeypad = [1,4,7,'*']
    const RKeypad = [3,6,9,'#']
    const midKeypad = [2,5,8,0]
    let L = '*', R = '#'
    
    const moveFinger = (hand, toNumber) => {
        result += hand
        hand === "L" ? L = toNumber : R = toNumber;
    }
    
    const howFar = (hand, number) => {
        let result = 0
        if (!midKeypad.includes(hand)) {
            result++
            let nowKeypad = hand === L ? LKeypad : RKeypad
            hand = midKeypad[nowKeypad.indexOf(hand)]
        }            
        result += Math.abs(midKeypad.indexOf(hand) - midKeypad.indexOf(number))
        return result
    }
    
    let result = ''
    for (let number of numbers) {
        if (LKeypad.includes(number)) {                        
            moveFinger("L", number)
        } else if (RKeypad.includes(number)) {                  
            moveFinger("R", number)
        } else {
            let howCloseL = howFar(L, number)
            let howCloseR = howFar(R, number)
            if (howCloseL === howCloseR) {
                moveFinger(hand === "left" ? "L" : "R", number)                
            } else if (howCloseL < howCloseR) moveFinger("L", number)
            else moveFinger("R", number)
        }
    }

    return result
}