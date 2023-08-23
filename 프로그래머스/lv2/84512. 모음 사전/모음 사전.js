function solution(word) {
//     1 1
//     1*5 5
//     1*5*5 25
//     1*5*5*5 125
//     1*5*5*5*5 625
//     781
    
//     "EIO"
//     2*5(0)+1*5(1)+1*5(2)+1*5(3)+1*5(4)
//     0 + 3*5(0) + 2*5(1) + 2*5(2) + 2*5(3)
//     0 + 0 + 4*5(0) + 3*5(1) + 3*5(2)
//     1+781 + 1+312 + 1+93 = 1189
    
    const aeiou = {A: 0, E: 1, I: 2, O: 3, U: 4}
    let result = 0
    const aux = (word, len) => {
        if (!word || len < 0) return
        result++
        const num = aeiou[word[0]]
        for (let i = 0; i < len; i++) result += num*(5**i)
        aux(word.slice(1), len-1)
    }
    aux(word, 5)
    return result    
}