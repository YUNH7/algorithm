function solution(my_string) {
    return my_string.split('')
        .map(el => {
        if (Number.isNaN(+el)) {
            return 0
        } else {
            return +el
        }
    })
    .reduce((acc, cur) => acc + cur)
}