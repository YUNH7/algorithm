function solution(phone_book) {
    const book = phone_book.sort()
    for (let i = 0; i < book.length - 1; i++) {
        const number = book[i]
        const next = book[i+1]
        if (next.startsWith(number)) return false
    }
    return true
}