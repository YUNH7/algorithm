function solution(food) {
    let foodArr = food.map(el => Math.floor(el/2))
    let answer = ''
    foodArr.forEach((el,i) => {
        answer += String(i).repeat(el)
    })
    let r = answer.slice().split('').reverse().join('')
    return answer + '0' + r
}