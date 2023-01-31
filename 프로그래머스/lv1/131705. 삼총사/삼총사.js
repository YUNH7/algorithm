function solution(number) {
    let result = 0
    for (let i = 0; i < number.length-2; i++) {
        for (let j= i+1; j < number.length-1; j++) {
            let two = number[i]+number[j]
            let three = number.slice(j+1)
            if(three.includes(-two)) {                
                result += three.filter(el => el === -two).length
            }
        }
    }
    return result
}