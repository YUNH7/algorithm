function solution(numbers, hand) {
    const keypad = {L: [1, 4, 7, '*'], both: [2, 5, 8, 0], R: [3, 6, 9, '#']};
    const handsOn = {L: '*', R: '#'};
    const defaultHand = hand === 'left' ? 'L' : 'R';
    const getNthMove = (hand, num) => {
        const now = handsOn[hand];
        const dirIdx = keypad[hand].indexOf(now);
        const numIdx = keypad.both.indexOf(num);
        if (dirIdx !== -1) return 1 + Math.abs(dirIdx - numIdx);
        return Math.abs(keypad.both.indexOf(now) - numIdx);
    }
    
    const hands = Object.keys(handsOn);
    return numbers.map(n => {
        let result = '';
        const [L, R] = hands.map(key => keypad[key].indexOf(n));
        const [lm, rm] = hands.map(key => getNthMove(key, n));
        
        if (L !== -1) result = 'L'
        else if (R !== -1 || lm > rm) result = 'R'
        else if (lm === rm) result = defaultHand;
        else result = 'L'
        
        handsOn[result] = n;
        return result;
    }).join('');
}