function solution(numbers) {
    const numbersArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const regExp = new RegExp(`(${numbersArr.join(')|(')})`, 'g')
    return +numbers.replace(regExp, (word) => numbersArr.indexOf(word))
}