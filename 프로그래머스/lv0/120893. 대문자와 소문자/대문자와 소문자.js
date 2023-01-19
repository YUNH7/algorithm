function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        let character = my_string[i]
        if (character.toUpperCase() === character) {
            answer += character.toLowerCase()
        } else {
            answer += character.toUpperCase()
        }
    }
    return answer
}